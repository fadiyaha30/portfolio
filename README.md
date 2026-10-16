# Faya Portfolio

Complete static portfolio source: HTML, CSS, JavaScript and local photo assets. No framework, dependencies, API keys, or environment variables are required.

## Run locally

Open this folder in VS Code. In a terminal run:

```sh
python3 -m http.server 3000 --directory public
```

On Windows, use `py -m http.server 3000 --directory public` if needed.
Open http://localhost:3000. Alternatively use the VS Code Live Server extension on public/index.html.

## Deploy on Vercel

1. Extract the ZIP and upload the contents of this folder to a new GitHub repository. Keep public/ and vercel.json at the repository root.
2. Import the repository into Vercel.
3. Use Framework Preset: Other; Root Directory: repository root; no Build Command; Output Directory: public.
4. Deploy. vercel.json supplies the output configuration. No environment variables needed.

Alternatively, run `npx vercel` from this folder and follow the prompts. Use `npx vercel --prod` for production.

## Edit

- public/index.html: text, links, project cards and timeline.
- public/styles.css: responsive layout and glass styling.
- public/app.js: skill filters and section navigation.
- public/assets/: profile images. The site uses faya-blurred.png; original photo is retained too.

This is plain HTML/CSS/JavaScript, not React or TypeScript. It can be migrated later. Cycling Pit Stops and Travel Log remain labelled as in development. Your new Vercel deployment will be public unless you enable access protection.
