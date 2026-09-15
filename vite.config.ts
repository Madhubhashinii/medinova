import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { nitro } from "nitro/vite";

// Deployment target for the Nitro server bundle.
// - unset (default): portable build, used by local dev/preview.
// - NITRO_PRESET=aws_lambda: emits an AWS Lambda handler (`npm run build:aws`).
//   The Lambda is intended to be invoked through a Function URL behind
//   CloudFront, with static assets served from S3 — no API Gateway required.
const preset = process.env["NITRO_PRESET"];

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    tailwindcss(),
    // TanStack Start's plugin must come before React's plugin.
    tanstackStart({
      // SSR error wrapper — see src/server.ts
      server: { entry: "./src/server.ts" },
    }),
    viteReact(),
    // Build-only: bundles the server output with Nitro.
    nitro(preset ? { preset } : {}),
  ],
});
