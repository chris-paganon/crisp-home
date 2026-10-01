Use pnpm, not npm.

To typecheck, run `pnpm lint-full` (which also runs typecheck). You may then run `pnpm lint:fix` to attempt to fix linting errors.
You may use `pnpm typecheck` or `pnpm lint` separately when one of the 2 fails to work faster. But both must pass before comitting. 

Don't start the dev environment, I have most likely already started it with `pnpm dev`, running on port 3000.