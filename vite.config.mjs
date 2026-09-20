import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Plugin to ensure Vite dev server serves the SPA root index.html
// for all route navigations instead of static build artifacts in the root directory.
function spaDevFallbackPlugin() {
  return {
    name: 'spa-dev-fallback',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.method === 'GET' && req.headers.accept?.includes('text/html')) {
          const [pathname, search] = (req.url || '').split('?');
          const hasNonHtmlExtension = /\.(?!(html)$)[a-zA-Z0-9]+$/.test(pathname);
          if (
            !hasNonHtmlExtension &&
            !pathname.startsWith('/@') &&
            !pathname.startsWith('/src') &&
            !pathname.startsWith('/node_modules') &&
            pathname !== '/' &&
            pathname !== '/index.html'
          ) {
            req.url = '/index.html' + (search ? `?${search}` : '');
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), spaDevFallbackPlugin()],
  server: {
    port: 5173,
    open: false,
  },
  build: {
    outDir: 'dist',
  },
});
