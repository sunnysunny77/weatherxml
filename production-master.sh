#!/bin/bash

set -m

set -e

set -x

npm run production-css & 

npm run production-js && fg
