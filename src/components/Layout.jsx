import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#FFFFFF' }}>
      <ScrollToTop />
      <Header />
      <main style={{ flex: '1 0 auto' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
