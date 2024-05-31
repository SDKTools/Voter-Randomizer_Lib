@ECHO OFF

npm -v >nul 2>&1
if errorlevel 1 (
    echo Downloading NPM(You can cancel at the installation part, this works for all dependencies)...
    curl -o node-setup.exe https://nodejs.org/dist/v16.2.0/node-v16.2.0-x86.msi
    echo NPM will be installed, follow the instructions...
    start node-setup.exe

    npm -v >nul 2>&1
    if errorlevel 1 (
        echo Installation cancelled.
        exit 1
    )
)

git -v >nul 2>&1
if errorlevel 1 (
    echo Downloading Git...
    curl -o git-setup.exe https://github.com/git-for-windows/git/releases/download/v2.45.1.windows.1/Git-2.45.1-32-bit.exe
    echo Git will be installed, follow the instructions...
    start git-setup.exe

    git -v >nul 2>&1
    if errorlevel 1 (
        echo Installation cancelled.
        exit 1
    )
)

echo Downloading Lib...
git clone https://github.com/SDKTools/Voter-Randomizer_Lib %TEMP%\lib_install
echo Installing Lib...
npm install %TEMP%\lib_install
echo Removing trash...
rmdir /s /f /q %TEMP%\lib_install\*
echo Done. You're ready to go