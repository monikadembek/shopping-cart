import { Link } from "react-router-dom";
import { StyledNavbar, Badge } from "./Navbar.styles";
import { ShoppingCart } from "react-feather";
import {
  CartContext,
  CartContextType,
} from "../../providers/cart-context-provider";
import { useContext } from "react";

function Navbar() {
  const cartContext: CartContextType | null = useContext(CartContext);
  const { cart } = cartContext as CartContextType;

  return (
    <StyledNavbar>
      <Link to="/">
        <h1 className="logo">SHOP</h1>
      </Link>
      <div className="links">
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cartIcon">
          {cart?.length > 0 && <Badge>{cart.length}</Badge>}
          <ShoppingCart />
        </Link>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
