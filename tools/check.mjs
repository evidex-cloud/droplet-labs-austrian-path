// Lesson + demo validator.   node tools/check.mjs [lesson-id …]      (no ids = whole course)   --quiet hides warnings
// Checks front matter, titles vs manifest, sections, quiz shape (and zh/en parity), [[links]], figures, every formula
// (KaTeX, vendored — the same math.js the app uses), the "$ is money, \( \) is math" rule, and that each demo imports.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { COURSE } = await import(pathToFileURL(path.join(ROOT, "content/manifest.js")).href + "?t=" + Date.now());
const { texError } = await import(pathToFileURL(path.join(ROOT, "math.js")).href);

const argv = process.argv.slice(2);
const quiet = argv.includes("--quiet");
const want = argv.filter((a) => !a.startsWith("--"));
const lessons = COURSE.stages.flatMap((s) => s.lessons.map((l, i) => ({ ...l, stage: s.n, num: `${s.n}.${i + 1}` })));
const ids = new Set(lessons.map((l) => l.id));
const order = new Map(lessons.map((l, i) => [l.id, i]));
const targets = want.length ? lessons.filter((l) => want.includes(l.id)) : lessons;
for (const w of want) if (!ids.has(w)) console.log("unknown lesson id:", w);

function parseLesson(src) {
  src = src.replace(/\r\n?/g, "\n").replace(/^﻿/, "");
  const meta = {};
  const fm = src.match(/^---\n([\s\S]*?)\n---\n/);
  if (fm) { for (const line of fm[1].split("\n")) { const m = line.match(/^(\w+):\s*(.*)$/); if (m) meta[m[1]] = m[2].trim(); } src = src.slice(fm[0].length); }
  const tm = src.match(/^#\s+(.+)$/m);
  const parts = src.split(/^##\s+@(\w+)\s*$/m);
  const sections = {};
  for (let k = 1; k < parts.length; k += 2) sections[parts[k].toLowerCase()] = parts[k + 1].trim();
  return { meta, title: tm ? tm[1].trim() : null, sections, hasFM: !!fm };
}
const items = (t) => (t || "").split("\n").filter((l) => /^[-*]\s+/.test(l));
function quiz(t) {
  const qs = []; let cur = null;
  for (const raw of (t || "").split("\n")) {
    const l = raw.trim(); let m;
    if ((m = l.match(/^\d+[.)]\s+(.*)$/))) { cur = { q: m[1], opts: 0, correct: 0, explain: false, pos: -1 }; qs.push(cur); }
    else if (cur && (m = l.match(/^[-*]\s+\[([ xX])\]\s+/))) { if (m[1] !== " ") { cur.correct++; cur.pos = cur.opts; } cur.opts++; }
    else if (cur && l.startsWith(">")) cur.explain = true;
  }
  return qs;
}
function segments(text) {
  const math = [];
  let s = text.replace(/```[\s\S]*?```/g, " ").replace(/`[^`\n]+`/g, " ").replace(/<svg[\s\S]*?<\/svg>/g, " ");
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, m) => { math.push({ tex: m.trim(), display: true }); return " ⟦M⟧ "; });
  s = s.replace(/\\\(([\s\S]+?)\\\)/g, (_, m) => { math.push({ tex: m.trim(), display: false }); return " ⟦m⟧ "; });
  return { math, prose: s };
}

let errors = 0, warnings = 0, formulas = 0;
const report = [];
const E = (id, lang, msg) => { errors++; report.push(`  ✗ [${id}/${lang}] ${msg}`); };
const W = (id, lang, msg) => { warnings++; if (!quiet) report.push(`  · [${id}/${lang}] ${msg}`); };
const demoChecked = new Set();

async function checkDemo(name, owner) {
  if (demoChecked.has(name)) return;
  demoChecked.add(name);
  const f = path.join(ROOT, "demos", name + ".js");
  if (!fs.existsSync(f)) { E(owner, "demo", `demo file demos/${name}.js is missing`); return; }
  const src = fs.readFileSync(f, "utf8");
  if (!/export\s+default\s+(async\s+)?function/.test(src)) E(owner, "demo", `${name}.js has no "export default function mount(root, lang)"`);
  if (!/lang\s*===\s*["']en["']/.test(src)) W(owner, "demo", `${name}.js may not be bilingual (no lang === "en")`);
  try { await import(pathToFileURL(f).href + "?t=" + Date.now()); } catch (e) { E(owner, "demo", `${name}.js fails to import: ${e.message}`); }
}

for (const Ls of targets) {
  const idx = order.get(Ls.id);
  const answerPos = [];
  for (const lang of ["zh", "en"]) {
    const file = path.join(ROOT, "content/lessons", lang, Ls.id + ".md");
    if (!fs.existsSync(file)) { E(Ls.id, lang, "file missing: " + path.relative(ROOT, file)); continue; }
    const raw = fs.readFileSync(file, "utf8");
    const P = parseLesson(raw), S = P.sections, meta = P.meta;
    if (!P.hasFM) E(Ls.id, lang, "missing front matter (--- … ---)");
    if (meta.id !== Ls.id) E(Ls.id, lang, `front-matter id "${meta.id}" ≠ manifest id`);
    const wantTitle = lang === "en" ? Ls.titleEn : Ls.title;
    if (P.title !== wantTitle) E(Ls.id, lang, `title "${P.title}" ≠ manifest "${wantTitle}"`);
    for (const p of (meta.prereqs || "").split(/[,\s]+/).filter(Boolean)) if (!ids.has(p)) E(Ls.id, lang, `prereq "${p}" is not a lesson id`);
    for (const s of ["hook", "intuition", "mechanics", "analogy", "misconceptions", "quiz", "further"]) if (!S[s]) E(Ls.id, lang, `missing section "## @${s}"`);
    const fr = items(S.further);
    if (fr.some((f) => !/^[-*]\s+\[[^\]]+\]\(https?:\/\/[^)\s]+\)/.test(f))) E(Ls.id, lang, "every further-reading item must be [label](https://…)");
    const qz = quiz(S.quiz);
    if (qz.length < 3) E(Ls.id, lang, `quiz: only ${qz.length} questions`);
    qz.forEach((q, i) => {
      if (q.opts < 2) E(Ls.id, lang, `quiz Q${i + 1}: ${q.opts} options`);
      if (q.correct !== 1) E(Ls.id, lang, `quiz Q${i + 1}: ${q.correct} options marked [x] (want exactly 1)`);
      if (!q.explain) W(Ls.id, lang, `quiz Q${i + 1}: no "> explanation" line`);
    });
    answerPos.push(qz.map((q) => q.pos).join(","));
    if (lang === "en") { const cj = raw.match(/[一-鿿]/g); if (cj) W(Ls.id, lang, `English file contains ${cj.length} Chinese characters (e.g. "${cj.slice(0, 6).join("")}")`); }
    // links
    for (const m of raw.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) if (!ids.has(m[1])) E(Ls.id, lang, `[[${m[1]}]] is not a lesson id`);
    // figures / HTML blocks
    if ((raw.match(/<figure[\s\S]*?<\/figure>/g) || []).some((f) => /\n\s*\n/.test(f))) E(Ls.id, lang, "blank line inside a <figure> block (breaks the block)");
    if (/<script/i.test(raw)) E(Ls.id, lang, "<script> is not allowed in lessons");
    const ctl = raw.replace(/```[\s\S]*?```/g, "").match(/[\x08\x0b\x0c\t]/);
    if (ctl) E(Ls.id, lang, "control character in the text (a backslash eaten by a shell?)");
    // math
    const { math, prose } = segments(raw.replace(/^---[\s\S]*?\n---\n/, ""));
    formulas += math.length;
    for (const m of math) {
      const err = texError(m.tex, m.display);
      if (err) E(Ls.id, lang, `KaTeX error in "${m.tex.slice(0, 70)}": ${err}`);
      if (/(?<!\\)%/.test(m.tex)) E(Ls.id, lang, `unescaped % in formula (write \\%): ${m.tex.slice(0, 60)}`);
      if (/[²³¹⁰⁴-⁹ⁿ₀-₉]/.test(m.tex)) E(Ls.id, lang, `Unicode super/subscript inside a formula — use ^{…} / _{…}: ${m.tex.slice(0, 60)}`);
    }
    for (const m of prose.matchAll(/\$(?![\d\s,.(−-])[^\n]{0,40}/g)) W(Ls.id, lang, `"$" not followed by a number outside math — inline math is \\( … \\), money is $12.50: "${m[0].slice(0, 40)}"`);
    for (const line of prose.split("\n")) {
      const L0 = line.replace(/⟦[Mm]⟧/g, " ").replace(/\[[^\]]*\]\([^)]*\)/g, " ").replace(/<[^>]+>/g, " ");
      if (/\\(frac|sqrt|times|cdot|approx|sum|text|mathrm)\b/.test(L0)) E(Ls.id, lang, `LaTeX command outside math (missing \\( … \\)?): "${L0.trim().slice(0, 80)}"`);
    }
    // *italic* is fine; a starred variable written as text (r*, P*) would open a stray italic run — write \(r^{*}\)
    const star = raw.replace(/<svg[\s\S]*?<\/svg>/g, "").replace(/\$\$[\s\S]*?\$\$/g, "").replace(/\\\([\s\S]*?\\\)/g, "").match(/[^\n]{0,30}(?<![*\w])[A-Za-z]\\?\*(?![*\w])[^\n]{0,30}/);
    if (star) E(Ls.id, lang, `starred variable in plain text (write \\(r^{*}\\)): "${star[0]}"`);
    const demoNames = [...(meta.demo || "").split(/[,\s]+/).filter(Boolean), ...[...raw.matchAll(/^::demo\[([a-z0-9-]+)\]/gm)].map((m) => m[1])];
    if (!meta.demo) E(Ls.id, lang, "front matter has no demo:");
    for (const d of demoNames) await checkDemo(d, Ls.id);
  }
  if (answerPos.length === 2 && answerPos[0] !== answerPos[1]) W(Ls.id, "zh+en", `quiz answers differ between languages (${answerPos[0]} vs ${answerPos[1]})`);
}

console.log(report.join("\n"));
console.log(`\n${targets.length} lesson(s) checked · ${formulas} formulas type-checked with KaTeX · ${errors} error(s) · ${warnings} warning(s)`);
process.exit(errors ? 1 : 0);
