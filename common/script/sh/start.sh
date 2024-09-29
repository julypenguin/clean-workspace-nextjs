#!/bin/bash

if [ -z "$1" ]; then
    node ./common/script/tools/platform-options.mjs start
    exit 0
fi

echo "START $1"

yarn workspace @app/$1 start