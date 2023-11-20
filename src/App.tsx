import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartContextProvider from "./providers/cart-context-provider";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import ProductDetails from "./components/Products/ProductDetails/ProductDetails";
import ShoppingCart from "./components/Cart/Cart";
import "./App.css";

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
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<ShoppingCart />} />
          </Routes>
        </main>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
