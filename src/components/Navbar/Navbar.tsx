import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
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
    <nav className={styles.navbar}>
      <Link to="/">
        <h1 className={styles.navbar__logo}>SHOP</h1>
      </Link>
      <div className={styles.navbar__links}>
        <Link to="/products">Products</Link>
        <Link to="/cart" className={styles.cartIcon}>
          {cart?.length > 0 && (
            <span className={styles.badge}>{cart.length}</span>
          )}
          <ShoppingCart />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
