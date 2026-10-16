# Faya Portfolio

A React portfolio built with TypeScript and the Next.js App Router. The original design, content, and local images are preserved. Static sections render on the server; navigation highlighting and skill filters use client components.

## Run locally

Requires Node.js 20.9 or newer and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000. Stop the previous Python server with Ctrl+C first if it is still using port 3000. Next.js refreshes the page automatically when you edit the source.

The previous Python static-server command no longer serves the application.

## Check changes

```sh
npm run typecheck
npm test
npm run build
```

TypeScript runs in strict mode. Application components use `.tsx`, and browser instrumentation uses `.ts`. The test harness remains CommonJS and compiles the instrumentation with the project TypeScript compiler before testing its behavior.

## Production

```sh
npm run build
npm start
```

## Deploy on Vercel

Import the GitHub repository and select the Next.js framework preset. Use the repository root and the default Next.js build and output settings; remove any older `public` output-directory override. No environment variables are required.

## Edit

- `app/page.tsx`: page composition and section ordering.
- `app/layout.tsx`: document layout, title, description, and viewport metadata.
- `app/globals.css`: shared styles and responsive layout.
- `components/`: portfolio sections, header, footer, and skill filters.
- `public/assets/`: profile images. The site displays `faya-blurred.png`; the original photo is retained.

Cycling Pit Stops and Travel Log remain labelled as in development.
