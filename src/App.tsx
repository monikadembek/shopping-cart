import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./providers/cart-context-provider";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
