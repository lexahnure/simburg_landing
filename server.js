const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.webp': 'image/webp',
};

function serveFile(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  res.writeHead(200, {
    'Content-Type': contentType,
    'Access-Control-Allow-Origin': '*'
  });
  fs.createReadStream(filePath).pipe(res);
}

const REDIRECTS = {
  '/index.dc.html': '/',
  '/about.dc.html': '/about',
  '/contact.dc.html': '/contact',
  '/privacy': '/privacy-policy',
  '/privacy.html': '/privacy-policy',
  '/privacy-policy.html': '/privacy-policy',
  '/product-rsp.dc.html': '/product-rsp',
  '/product-edoc.dc.html': '/product-edoc',
  '/product-sim-os.dc.html': '/product-sim-os',
  '/product-ota.dc.html': '/product-ota',
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);

  // Handle known 301 redirects
  if (REDIRECTS[reqPath]) {
    res.writeHead(301, { Location: REDIRECTS[reqPath] });
    return res.end();
  }

  // Security: prevent directory traversal
  const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');

  // 1. If dist directory exists, check dist files first
  if (fs.existsSync(DIST)) {
    let distPath = path.join(DIST, safePath);
    if (fs.existsSync(distPath)) {
      const stat = fs.statSync(distPath);
      if (stat.isFile()) {
        return serveFile(res, distPath);
      }
      if (stat.isDirectory()) {
        let indexPath = path.join(distPath, 'index.html');
        if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
          return serveFile(res, indexPath);
        }
      }
    }

    // Check with .html extension
    let distHtmlPath = distPath + '.html';
    if (fs.existsSync(distHtmlPath) && fs.statSync(distHtmlPath).isFile()) {
      return serveFile(res, distHtmlPath);
    }
  }

  // 2. Check ROOT for files (e.g. uploads, fonts, assets)
  let rootPath = path.join(ROOT, safePath);
  if (fs.existsSync(rootPath)) {
    const stat = fs.statSync(rootPath);
    if (stat.isFile()) {
      return serveFile(res, rootPath);
    }
    if (stat.isDirectory()) {
      let indexPath = path.join(rootPath, 'index.html');
      if (fs.existsSync(indexPath) && fs.statSync(indexPath).isFile()) {
        return serveFile(res, indexPath);
      }
    }
  }

  // 3. SPA fallback: if not an asset file with a file extension, serve index.html
  const ext = path.extname(safePath).toLowerCase();
  const isAsset = ext && ext !== '.html';

  if (!isAsset) {
    const distIndex = path.join(DIST, 'index.html');
    if (fs.existsSync(distIndex)) {
      return serveFile(res, distIndex);
    }
    const rootIndex = path.join(ROOT, 'index.html');
    if (fs.existsSync(rootIndex)) {
      return serveFile(res, rootIndex);
    }
  }

  // 4. Fallback 404
  const dist404 = path.join(DIST, '404.html');
  if (fs.existsSync(dist404)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    return fs.createReadStream(dist404).pipe(res);
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`404 Not Found: ${reqPath}`);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Serving React application from ${DIST}`);
});
