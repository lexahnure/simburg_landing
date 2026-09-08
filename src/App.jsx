import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProductRspPage from './pages/ProductRspPage';
import ProductEdocPage from './pages/ProductEdocPage';
import ProductSimOsPage from './pages/ProductSimOsPage';
import ProductOtaPage from './pages/ProductOtaPage';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/product-rsp" element={<ProductRspPage />} />
          <Route path="/product-edoc" element={<ProductEdocPage />} />
          <Route path="/product-sim-os" element={<ProductSimOsPage />} />
          <Route path="/product-ota" element={<ProductOtaPage />} />

          {/* Backwards compatibility redirects */}
          <Route path="/index.dc.html" element={<Navigate to="/" replace />} />
          <Route path="/about.dc.html" element={<Navigate to="/about" replace />} />
          <Route path="/contact.dc.html" element={<Navigate to="/contact" replace />} />
          <Route path="/product-rsp.dc.html" element={<Navigate to="/product-rsp" replace />} />
          <Route path="/product-edoc.dc.html" element={<Navigate to="/product-edoc" replace />} />
          <Route path="/product-sim-os.dc.html" element={<Navigate to="/product-sim-os" replace />} />
          <Route path="/product-ota.dc.html" element={<Navigate to="/product-ota" replace />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
