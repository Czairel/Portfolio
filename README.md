# Portfolio

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` builds the site and publishes
the generated `dist` directory whenever changes are pushed to `main`. In the
repository's **Settings → Pages**, set the build and deployment source to
**GitHub Actions**. The build uses relative asset paths, and navigation uses
URL hashes so it works when the repository is hosted under a project subpath.
