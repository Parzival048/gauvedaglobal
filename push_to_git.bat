@echo off
echo Committing and pushing changes to GitHub...
echo.

cd /d "%~dp0"

echo Checking git status...
git status
echo.

echo Adding netlify.toml...
git add netlify.toml
echo.

echo Committing changes...
git commit -m "Fix Netlify build: ensure dependencies are installed before build"
echo.

echo Pushing to GitHub...
git push origin main
echo.

echo Done! If the branch is 'master' instead of 'main', please run: git push origin master
echo.
pause
