#!/bin/bash

set -e

set -x

npm run php-server &

S1=$!

npm run https-server &

S2=$!

npm run watch-js &

wait
 
kill $S1 $S2 







