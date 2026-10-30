# Portfolio

## GitHub Pages deployment

Build the site with `npm ci` followed by `npm run build`, then publish the
generated `dist` directory with your GitHub Pages deployment method. The build
uses relative asset paths, and navigation uses URL hashes so it works when the
repository is hosted under a project subpath.
