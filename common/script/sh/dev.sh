#!/bin/bash

if [ -z "$1" ]; then
    node ./common/script/tools/platform-options.mjs dev
    exit 0
fi

echo "DEV $1"

yarn workspace @app/$1 dev