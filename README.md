# TEN@ Digitals website

Static website for TEN@ Digitals, built from the TEN @ Digitals website PRD.

## Pages

- `index.html`: Home
- `about/`: About
- `work/`: Work (four service categories, rendered from `assets/site.js`)
- `contact/`: Contact and project enquiry form
- `privacy/`: Privacy Policy (placeholder)

The header, footer and service list are shared and live in `assets/site.js`. Styles are in `assets/styles.css`.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 5510
```

## Still to be confirmed

Items marked "To be confirmed" on the site are waiting for content from TEN@ Digitals:

- The eight "Why Ten@ Digitals?" points
- The rest of the About introduction
- Social media profile URLs
- Privacy Policy text
- Service descriptions
- The enquiry form backend (for now the form opens the visitor's mail app, addressed to reach@tenat.com)
