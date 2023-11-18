import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { ShoppingCart } from "react-feather";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h1 className={styles.navbar__logo}>SHOP</h1>
      </Link>
      <div className={styles.navbar__links}>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          <ShoppingCart />
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
