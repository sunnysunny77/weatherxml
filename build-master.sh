#!/bin/bash

set -m

set -e

set -x

npm run build-css & 

npm run build-js && fg
