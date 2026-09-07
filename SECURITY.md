# Security and research boundaries

The public application is an educational research prototype. `/api/simulate`
returns a fictional, rule-based scenario; it does not call a paid AI provider.
There is no provider API key to configure for this feature.

The public NHANES JSON contains aggregate coefficients and is imported into a
client component. These coefficients and the published source are readable and
reproducible. API keys cannot make already-public material secret.

## Current controls

- Simulation payloads must be JSON, at most 2 KB, and match the supported types
  and ranges. Unknown fields and malformed payloads are rejected.
- Cross-site browser requests are rejected. This is not authentication or a
  bot defense: non-browser clients can still call this public demo.
- Responses are not cached. Basic response headers apply in Next deployments.
- Provider secrets and common private-key files are ignored by Git.
- No patient records or request payloads are intentionally logged by this route.
  Hosting-level logging still needs a separate review.

## Before adding a proprietary or paid service

Keep service credentials in server-only hosting environment variables, never
in `NEXT_PUBLIC_*`, `public/`, or client-side code. Put private models in a
private server service. Use per-user authorization and durable quotas/rate
limits, with cost monitoring and a bounded public demo. A static key placed in
the browser, CORS, or JavaScript obfuscation is not a secrecy boundary.

This branch does not configure hosting secrets, rotate keys, change repository
visibility, add authentication or rate limiting, or deploy the live website.
The existing Sites/Vinext configuration is retained, while the dependency
lockfile and type checking match the active Next.js application in package.json.
The Vercel configuration still uses npm install without a frozen lockfile;
align its installation policy before a reproducible production deployment.

Run the request-boundary checks with:

```sh
node --experimental-strip-types --test tests/simulate.test.mjs
```

Run `pnpm run build` to validate the Next application with TypeScript checks.
The narrower tsconfig does not type-check the retained legacy Vite configuration.
