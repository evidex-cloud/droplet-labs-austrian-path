@echo off
REM Droplet Labs · 奥派之路 · Austrian Path —— 本地启动
REM 用本地服务器打开（不要直接双击 index.html）：
REM   1) 课文是按需 fetch 的 Markdown，file:// 下不可用，http://localhost 才行
REM   2) 交互演示是按需 import 的 ES 模块，也需要服务器
chcp 65001 >nul
cd /d "%~dp0"
echo.
echo   Droplet Labs - Austrian Path  -^>  http://localhost:8786/
echo   关闭本窗口即停止。若浏览器先打开报错，刷新一下即可。
echo.
start "" http://localhost:8786/
python -m http.server 8786
