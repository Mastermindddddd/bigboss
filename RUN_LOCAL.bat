@echo off
setlocal
cd /d "%~dp0"
echo.
echo ==============================================
echo  BigBoss Corporate Website - Local Preview
echo ==============================================
echo.
if not exist node_modules (
  echo Dependencies are not installed yet.
  echo Running npm ci...
  call npm ci
  if errorlevel 1 goto :error
)
echo Starting BigBoss with Digital Solutions...
echo Open http://localhost:3000 in your browser.
echo Press Ctrl+C in this window to stop the server.
echo.
call npm run dev
exit /b 0
:error
echo.
echo Installation failed. Keep this window open and send the error to Abel/technical support.
pause
exit /b 1
