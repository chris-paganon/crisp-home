#!/usr/bin/env bash

set -euo pipefail

container_id="$(docker compose --env-file deploy.env ps --quiet app)"
[[ -n "$container_id" ]]
[[ "$(docker inspect --format '{{.State.Health.Status}}' "$container_id")" == "healthy" ]]
