#!/bin/bash

source $INIT_CWD/.env

set -m

set -e

set -x

npm run watch-js &

npm run watch-css & 

npm run php-server &

npm run https-server & 

npm run open-server &

echo "server live on https://$CN:3000" && fg






