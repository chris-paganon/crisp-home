<p align="center">
  <img src="app/assets/images/logo-square.png" alt="DockIY logo" width="160" />
</p>

# DockIY Nuxt template

A flexible [Nuxt](https://nuxt.com/) starter for applications deployed with
[DockIY](https://dockiy.com). It does not prescribe a database or
authentication system.

## Docs for this template

- [Website](https://dockiy.com/templates/nuxt)
- [Demo](https://nuxt.dockiy.com)
- [Codeberg](https://codeberg.org/chris-paganon/dockiy-nuxt)

## Requirements

Install [Node.js 24+](https://nodejs.org/en/download/),
[pnpm 11+](https://pnpm.io/installation), [Docker Engine](https://docs.docker.com/engine/install/),
[Docker Compose](https://docs.docker.com/compose/install/), and the
[DockIY CLI](https://dockiy.com/guide/installation). Install
[SOPS](https://getsops.io/docs/installation/) and [age](https://github.com/FiloSottile/age#installation)
if you will use encrypted environment files.

## Get started

Create a project or clone this repository, then edit `dockiy.yml` in the
project root. Set `name` and the staging/production hosts:

```yaml
name: my-app

environments:
  staging:
    host: staging.example.com
    compose_file: docker-compose.yml
    secrets_file: .enc.staging.env
  production:
    host: example.com
    compose_file: docker-compose.yml
    secrets_file: .enc.production.env
```

Install dependencies and start Nuxt:

```bash
pnpm install
pnpm dev
```

For local values, copy `.env.example` to `.env`, or decrypt the local dotenv
file:

```bash
cp .env.example .env
# or: sops decrypt .enc.local.env > .env
```

Edit deployment dotenv files with `sops edit .enc.staging.env` and
`sops edit .enc.production.env`. Keep `.env` local and commit only encrypted
files. See the [Nuxt template guide](https://dockiy.com/templates/nuxt) for
deployment commands.
