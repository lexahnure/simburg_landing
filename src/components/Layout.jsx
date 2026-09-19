import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children }) {
  return (
    <div className="app-layout">
      <ScrollToTop />
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
