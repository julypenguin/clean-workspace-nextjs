#!/bin/bash

# Exit immediately if a command exits with a non-zero status.
set -e

if [ -z "$1" ]; then
    node ./common/script/tools/platform-options.mjs build
    exit 0
fi

echo "BUILD $1"

GIT_HASH=$(git rev-parse HEAD) yarn workspace @app/$1 build