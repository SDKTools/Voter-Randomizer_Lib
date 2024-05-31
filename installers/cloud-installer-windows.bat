@ECHO OFF

winget install Schniz.fnm
fnm use --install-if-missing 20
winget install --id Git.Git -e --source winget
git clone https://github.com/SDKTools/Voter-Randomizer_Lib.git
npm install .\Voter-Randomizer_Lib