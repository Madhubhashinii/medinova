# MediNova — AWS SSR deployment readiness (Option B)

Architecture target:

```text
User -> CloudFront
          |-> S3      (static assets: JS, CSS, images, fonts)
          `-> Lambda  (Nitro SSR -> TanStack Start -> HTML)
```

## Stack

- React 19 + TanStack Start + TanStack Router (file-based routes in `src/routes`)
- Vite 8 build, Nitro 3 server bundling
- No database, no authentication, no server state. All content is local data.

## Build commands

| Command             | Purpose                                              |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Local development (Vite dev server, SSR enabled)      |
| `npm run build`     | Portable production build (`node .output/server/index.mjs`) |
| `npm run build:aws` | Production build with `NITRO_PRESET=aws_lambda`        |

`npm run build:aws` produces:

- `.output/server/` — Nitro bundle exporting a Lambda `handler`
  (`export { handler }` in `.output/server/index.mjs`), ESM, Node 20+ runtime.
- `.output/public/` — hashed static assets to upload to S3.

## Suggested wiring (not created by this repo)

1. Upload `.output/public/**` to an S3 bucket (private, origin access control).
2. Deploy `.output/server` as a Lambda function, handler `index.handler`,
   runtime `nodejs20.x` (or later), and enable a **Lambda Function URL**.
   No API Gateway is needed — the aws-lambda preset works with a Function URL.
3. CloudFront distribution:
   - default behaviour -> Lambda Function URL origin (SSR)
   - `/assets/*`, `/favicon.ico`, `/robots.txt` -> S3 origin (long cache TTL)
4. Forward `Host`, `Accept`, `Accept-Encoding` as needed; do not cache HTML
   aggressively unless desired.

If response streaming is wanted later, set `awsLambda.streaming` in the Nitro
config and use `RESPONSE_STREAM` on the Function URL.

## Statelessness

- No sessions, no filesystem writes, no sockets, no background jobs.
- Every request is handled independently; nothing must survive an invocation.
- No environment variables are required to run the app.

## Browser-only APIs

`window`, `document`, `localStorage`, `matchMedia`, `IntersectionObserver` and
`requestAnimationFrame` are only touched inside `useEffect` / event handlers
(`NavBar`, `ThemeToggle`, `useReveal`, `useCountUp`), so SSR renders cleanly.
