# ALERT NGO Web Application

Official web portal and digital advocacy platform for the **Association for Land and Livelihood (ALERT)**, championing Adivasi land rights, constitutional Fifth-Scheduled governance, and livelihood security in Andhra Pradesh.

## Features
- **Interactive 20-Year Milestones Timeline** with category filters and year scrubbers
- **Identified Territory & Mandal Map** with Leaflet interactive overlays
- **Document & Statutory Act Repository** with in-browser PDF Viewer
- **Polavaram Project & LA R&R Legal Interventions Dossier**
- **Mobile Responsive Design** with accessible navigation and fast Vite builds

## Project Structure
```
alertngo-main/
├── frontend/          # React + Vite single-page app
│   ├── public/        # Static assets (logo, icons, uploads)
│   ├── src/           # Components, pages, API client and local data
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/           # PHP REST API for XAMPP/MySQL
├── vercel.json        # Builds and serves the frontend from /frontend
└── README.md
```

## Getting Started

### Run Backend (Windows + XAMPP)

Double-click `backend.bat` (or run it in a terminal). It finds PHP (PATH, XAMPP or Laragon), starts XAMPP MySQL if port 3306 is down, creates `alertngo_db` from `schema.sql` on first run, and serves the API with PHP's built-in server at `http://127.0.0.1:8001`.

The frontend's API base is `http://127.0.0.1:8001` (`frontend/src/api/client.js`). Port `8001` is used because `8000` may already be taken by another local server; change `PORT` at the top of `backend.bat` and `API_BASE` together if needed.

### Install Frontend Dependencies
```bash
cd frontend
npm install
```

### Run Locally
```bash
cd frontend
npm run dev
```

### Build for Production
```bash
cd frontend
npm run build
```

The production output is written to `frontend/dist`. Vercel uses the root
`vercel.json`, which builds from `frontend` and publishes that folder.
"# alertngo" 
