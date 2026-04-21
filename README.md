# musical-train

Minimal deployable Node.js service with a health endpoint.

## Runtime
- Node.js 20+
- npm

## Local run (production command)
```bash
npm install
npm start
```

Service runs on `http://0.0.0.0:${PORT:-3000}`.

## Deploy (Render)
This repository includes `render.yaml` for straightforward hosted deployment.

1. Push this repository to GitHub.
2. In Render, choose **New +** → **Blueprint** and select this repo.
3. Render creates a web service using:
   - Build command: `npm install`
   - Start command: `npm start`

## Verify deployment health
After deploy, open:

```text
https://<your-render-service-url>/health
```

Expected response:

```json
{"ok":true}
```
