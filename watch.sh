#!/bin/bash

set -e

set -x

npm run watch-js &

S1=$!

npm run php-server &

S2=$!

npm run https-server &

S3=$!

npm run watch-css &

S4=$!

wait
 
kill $S1 $S2 $S3 $S4