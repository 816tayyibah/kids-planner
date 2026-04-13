# BrightDay Kids Planner

This project is a static `PWA` and is ready to deploy on `Netlify` or `Vercel`.

## Files

- `index.html`
- `styles.css`
- `script.js`
- `manifest.json`
- `sw.js`
- `icon-192.svg`
- `icon-512.svg`
- `netlify.toml`
- `vercel.json`

## Deploy To Netlify

1. Sign in to `Netlify`.
2. Choose `Add new site` -> `Deploy manually`.
3. Drag this whole project folder into Netlify.
4. Wait for the site to publish.
5. Open the deployed URL and test `Install App`.

If you use Git with Netlify:

1. Push this folder to GitHub.
2. In Netlify choose `Add new site` -> `Import an existing project`.
3. Select the repository.
4. Keep the publish directory as the project root.
5. Deploy.

## Deploy To Vercel

1. Sign in to `Vercel`.
2. Choose `Add New...` -> `Project`.
3. Import the repository or upload the folder.
4. Vercel should detect it as a static site automatically.
5. Deploy and open the live URL.

## Notes

- `PWA` install works on `https` or `localhost`.
- The service worker caches files for offline use after the first successful load.
- If you deploy updates and still see old content, refresh once or clear the site storage/service worker cache in the browser.
