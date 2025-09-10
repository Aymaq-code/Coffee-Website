import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CoffeeProvider } from "./context/CoffeeContext";
import { CartProvider } from "./context/CartContext.jsx";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <CoffeeProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/login" element={<LogInPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </CoffeeProvider>
    </AuthProvider>
  );
}

export default App;
