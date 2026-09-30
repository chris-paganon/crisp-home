#!/usr/bin/env bash

set -euo pipefail

docker build --tag "$DOCKIY_APP_IMAGE" --platform "$DOCKIY_PLATFORM" --target app .
