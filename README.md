# Suryansh Singh — Portfolio

A static Next.js App Router portfolio with React, TypeScript, Three.js, Lucide icons, and locally served fonts.

## Development

```sh
npm install
npm run dev
npm test
npm run build
npm run typecheck
```

Open http://127.0.0.1:3000. The static export is `out/`. Directory-style routes work on static hosts because `trailingSlash` is enabled. Tests use Node's native TypeScript stripping (Node 22.18+).

## Content and implementation

- `src/data/portfolio.ts`: profiles, all three supplied live demos, repositories, project descriptions, skills, education.
- `src/components/work.tsx`: project workflows and concrete internship deliverables.
- `src/app/projects/churnguard/page.tsx`: sourced case study, architecture, recorded metrics, and evaluation limitations.
- `src/components/sculpture.tsx`: deferred 3D scene, pause/reset, WebGL fallback, resource disposal.
- `src/lib/animation-loop.ts`: cancels scheduling while paused, hidden, or offscreen; tested pause/resume behavior.
- `src/components/copy-email.tsx`: clipboard action with success and failure feedback.
- `src/app/cinematic.css`: responsive cinematic styling; scene controls have a separate layout row to prevent overlap.
- `public/resume.pdf`: corrected, visually reviewed one-page resume with demo links.
- `scripts/generate_resume.py`: PDF source (requires reportlab).

## Deployment URL

Set `NEXT_PUBLIC_SITE_URL` to your actual public HTTPS origin before the production build. This enables canonical URLs, social image URLs, and sitemap entries. No domain is fabricated. `robots.txt` omits the sitemap reference until configured.

## Contact

The form validates inputs and prepares a mailto draft. The visitor sends it in their email app. Copy email is also available, including clipboard error feedback. Direct delivery requires a separately selected email provider and server endpoint; no credentials or service have been configured.

## Content verification

The repository homepages confirm each supplied demo mapping. Sources reviewed:

- https://github.com/TechySuryansh/GenAI/blob/main/README.md
- https://github.com/TechySuryansh/GenAI/blob/main/results/metrics.json
- https://github.com/TechySuryansh/GenAI/blob/main/src/train.py
- https://github.com/TechySuryansh/GenAI/blob/main/src/preprocess.py
- https://github.com/TechySuryansh/Mental_Health_Tracker/blob/main/main.py
- https://github.com/TechySuryansh/Chat_Bot/blob/main/backend/langgraph_backend.py

Mental Health Tracker is described as a prediction-based educational wellness prototype, not a chatbot or clinical product. Its landing-page marketing claims are not repeated. Chat Bot's description distinguishes the current repository from the hosted deployment; model-provider claims from the outdated brief were removed. No new technologies have been added to the personal skills list.

ChurnGuard's saved metrics are explicitly preliminary: current preprocessing fits scaling before the split. This portfolio does not change the separate ChurnGuard repository or claim to have rerun its evaluation. Internship percentages were replaced with concrete deliverables because measurement evidence was not available.

## Verification and remaining limits

- Production build, TypeScript, and animation-loop tests pass.
- PDF was rendered and visually inspected.
- Project cards show clearly labeled workflows rather than pretend screenshots.
- Browser access was unavailable and native Chrome inspection timed out. Responsive layout, WebGL interactions, clipboard behavior, and Core Web Vitals still need real-browser verification.
- The Mental Health Tracker homepage was retrievable. Streamlit requests repeatedly redirected in this environment; live interactions were not verified.
- Genuine project screenshots/walkthroughs still need capture. An attempted download of an existing evaluation chart was blocked by an automatic-approval usage-limit failure, not a safety finding.
- Public deployment origin is still needed for final metadata.
