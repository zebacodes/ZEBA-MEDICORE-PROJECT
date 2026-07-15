# MediCore — interactive prototype

An interactive prototype of the MediCore unified healthcare system, based on the project blueprint. It simulates four role-based dashboards — patient, clinician, front-desk staff, and admin — so you can click through how each one experiences the system.

Plain HTML, CSS, and vanilla JavaScript. No build step, no dependencies beyond an icon font loaded from a CDN.

## Project structure

```
medicore-app/
├── index.html        Page shell and layout
├── css/
│   └── style.css     All styling
├── js/
│   ├── data.js        Role definitions and mock dashboard data
│   └── app.js          Rendering and interaction logic
└── README.md
```

## Run locally

Open `index.html` directly in a browser, or serve it:

```
python3 -m http.server
```

then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a new repository on GitHub and push these files to it.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
4. Choose the `main` branch and `/ (root)` folder, then save.
5. Your site will publish at `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Extending it

- Add new roles or dashboard content in `js/data.js` — the nav and content panel render from that data automatically.
- Swap the mock data in `data.js` for real API calls once a backend exists.
