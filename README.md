# Saad Taibi — AI-Native Software Developer portfolio

Static GitHub Pages site at https://saadhat.github.io. The existing neon visual design is retained.

## Page structure

- Hero: AI-Native Software Developer, consistent with the downloadable CV.
- How I build: transparent explanation of product ownership and AI-generated code, plus a four-step workflow visual.
- Projects: Goalden Ball, Confirmal, Istighfar Counter and Muslim Quest OS, with technology stacks labelled **Built with** and an AI tools line for each project.
- Contact: About statement, email, PDF CV download, GitHub and Google Play links. The layout uses consistent icons, accessible controls and mobile-responsive spacing.

## Projects

- **Goalden Ball:** Released Flutter/Firebase Android football trivia game; AI tools: Cursor, Windsurf, Claude Code.
- **Confirmal:** Live social-commerce operations website; AI tool: Codex.
- **Istighfar Counter:** Free, ad-free Kotlin/Jetpack Compose Android app in release preparation; AI tool: Codex.
- **Muslim Quest OS:** In-development local-first React/TypeScript web/PWA; AI tool: Codex.

The technologies listed describe the projects' stacks; they are not claims of hand-coding expertise.

The optional PayPal tip link is shown only in Istighfar Counter's project details dialog (reachable from the project card and screenshot viewer), never on the main portfolio grid or contact page. No app features are unlocked by contributing, and there is no embedded payment processor. Do not link to outside payments from the Android app without checking Google Play's payments policy.

The public CV at `assets/Saad_Taibi_CV.pdf` is an updated one-page overview without a public phone number.

## Technical notes

- Static `index.html` with inline CSS and JavaScript, no build step.
- Preserve gallery screenshots and gameplay video; existing `photos/`, `istighfar.html`, and `app-ads.txt` assets remain available.
- Local preview: `python -m http.server 8875 --bind 127.0.0.1`
