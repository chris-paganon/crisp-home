# syntax=docker/dockerfile:1

FROM node:24-slim AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN corepack enable

WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

FROM base AS build-deps

RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile --ignore-scripts

FROM build-deps AS build

COPY . .

RUN pnpm build

FROM node:24-slim AS app

ENV NODE_ENV="production"
ENV NITRO_HOST="0.0.0.0"
ENV PORT="3000"

WORKDIR /app

# Keep unchanged dependencies and public assets reusable across server rebuilds.
# The node user is UID/GID 1000; numeric ownership keeps linked copies independent.
COPY --link --from=build --chown=1000:1000 /app/.output/server/node_modules ./.output/server/node_modules
COPY --link --from=build --chown=1000:1000 /app/.output/public ./.output/public
COPY --link --from=build --chown=1000:1000 --exclude=server/node_modules --exclude=public /app/.output ./.output

USER node

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
