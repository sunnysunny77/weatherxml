#!/bin/bash

set -x

npm run watch-js &

npm run watch-css & 

npm run php-server &

npm run https-server & 

npm run open-server






