import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CoffeeProvider } from "./context/CoffeeContext";
import { CartProvider } from "./context/CartContext.jsx";
import { ScrollAnimationProvider } from "./context/ScrollAnimationContext.jsx";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage.jsx";
import ReservePage from "./pages/ReservePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import BlogPageDynamic from "./components/BlogPageDynamic.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <CoffeeProvider>
        <CartProvider>
          <ScrollAnimationProvider>
            <BrowserRouter basename="/">
              <Routes>
                <Route index element={<HomePage />} />
                <Route path="/menu" element={<MenuPage />} />
                <Route path="/reserve" element={<ReservePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />}>
                  <Route index element={<Navigate to="page/1" replace />} />
                  <Route path="page/:pageNo" element={<BlogPageDynamic />} />
                </Route>
                <Route path="/login" element={<LogInPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/payment" element={<PaymentPage />} />
              </Routes>
            </BrowserRouter>
          </ScrollAnimationProvider>
        </CartProvider>
      </CoffeeProvider>
    </AuthProvider>
  );
}

export default App;
