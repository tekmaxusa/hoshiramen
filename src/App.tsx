import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';
import { OrderOnlinePage } from './pages/OrderOnlinePage';
import { ReservationsPage } from './pages/ReservationsPage';
import { ContactPage } from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#161412]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/order-online" element={<OrderOnlinePage />} />
              <Route path="/reservations" element={<ReservationsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}
