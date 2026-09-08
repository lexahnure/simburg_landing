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

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);

  // Security: prevent directory traversal
  const safePath = path.normalize(reqPath).replace(/^(\.\.[\/\\])+/, '');

  // 1. If dist directory exists, prefer dist
  if (fs.existsSync(DIST)) {
    let distPath = path.join(DIST, safePath);
    if (fs.existsSync(distPath) && fs.statSync(distPath).isFile()) {
      return serveFile(res, distPath);
    }

    // 2. Check ROOT for files (e.g. uploads, legacy files)
    let rootPath = path.join(ROOT, safePath);
    if (fs.existsSync(rootPath) && fs.statSync(rootPath).isFile()) {
      return serveFile(res, rootPath);
    }

    // 3. SPA fallback: if not a file with extension, serve dist/index.html
    const distIndex = path.join(DIST, 'index.html');
    if (fs.existsSync(distIndex)) {
      return serveFile(res, distIndex);
    }
  }

  // Fallback if dist doesn't exist
  let fallbackPath = path.join(ROOT, safePath === '/' ? 'index.html' : safePath);
  if (fs.existsSync(fallbackPath) && fs.statSync(fallbackPath).isFile()) {
    return serveFile(res, fallbackPath);
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`404 Not Found: ${reqPath}`);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Serving React application from ${DIST}`);
});
