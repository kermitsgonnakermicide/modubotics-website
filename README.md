# Modubotics

A small, responsive one-page website for Modubotics, with the supplied wordmark, gear favicon, statement of intent, and contact email.

## Preview

No build step or dependencies are required. Open `index.html` in a browser, or serve this directory with any static web server.

## Hosting

For hosts that run a build command, use `npm run build` and set the output directory to `dist`. The build uses Node.js 18 or later, requires no dependencies, and copies the HTML, stylesheet, and assets into `dist`.

## Edit

- `index.html`: statement, email, page metadata, and footer.
- `styles.css`: layout, typography, and colors.
- `assets/logo.svg` and `assets/favicon.svg`: original supplied brand assets.
- `assets/gradcapital.png`: original full-colour gradCapital logo sourced from its official website, https://www.gradcapital.in/ (Framer-hosted asset), displayed without a surrounding background.
- `assets/gradcapital-light.svg`: light-background treatment using the logo's dark teal for the pale lettering, while preserving the original Capital portion.

The initial statement is draft copy about modular robotics and should be reviewed before a production launch. The only external resource is Google Fonts (Space Grotesk), with system fallbacks. No analytics or cookies are included.
