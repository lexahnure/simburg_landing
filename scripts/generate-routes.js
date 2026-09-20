const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const routes = [
  'about',
  'contact',
  'privacy-policy',
  'privacy',
  'product-rsp',
  'product-edoc',
  'product-sim-os',
  'product-ota'
];

function generate() {
  const distIndex = path.join(DIST, 'index.html');
  if (!fs.existsSync(distIndex)) {
    console.error('dist/index.html not found! Run vite build first.');
    process.exit(1);
  }

  const htmlContent = fs.readFileSync(distIndex, 'utf8');

  // 1. Generate 404.html in dist and root
  fs.writeFileSync(path.join(DIST, '404.html'), htmlContent, 'utf8');
  fs.writeFileSync(path.join(ROOT, '404.html'), htmlContent, 'utf8');
  console.log('✓ Created 404.html in dist/ and root');

  // 2. Generate static route directories & .html files
  routes.forEach(route => {
    // In dist/
    const distRouteDir = path.join(DIST, route);
    if (!fs.existsSync(distRouteDir)) {
      fs.mkdirSync(distRouteDir, { recursive: true });
    }
    fs.writeFileSync(path.join(distRouteDir, 'index.html'), htmlContent, 'utf8');
    fs.writeFileSync(path.join(DIST, `${route}.html`), htmlContent, 'utf8');

    // In root
    const rootRouteDir = path.join(ROOT, route);
    if (!fs.existsSync(rootRouteDir)) {
      fs.mkdirSync(rootRouteDir, { recursive: true });
    }
    fs.writeFileSync(path.join(rootRouteDir, 'index.html'), htmlContent, 'utf8');
    fs.writeFileSync(path.join(ROOT, `${route}.html`), htmlContent, 'utf8');

    console.log(`✓ Created route entries for /${route}`);
  });

  // 3. Ensure config files exist in dist
  const configs = ['_redirects', 'vercel.json', 'netlify.toml', '.htaccess'];
  configs.forEach(file => {
    const rootFile = path.join(ROOT, file);
    const distFile = path.join(DIST, file);
    if (fs.existsSync(rootFile)) {
      fs.copyFileSync(rootFile, distFile);
      console.log(`✓ Copied ${file} to dist/`);
    }
  });

  console.log('Static routes successfully generated for SPA compatibility across all hosting platforms!');
}

generate();
