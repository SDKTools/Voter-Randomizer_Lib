#!/bin/bash

curl -fsSL https://fnm.vercel.app/install | bash
fnm use --install-if-missing 20
git clone https://github.com/SDKTools/Voter-Randomizer_Lib.git /tmp/libTemp
npm install /tmp/libTemp