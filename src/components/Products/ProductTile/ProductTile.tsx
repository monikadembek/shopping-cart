import { useContext } from "react";
import styles from "./ProductTile.module.scss";
import {
  CartContext,
  CartContextType,
} from "../../../providers/cart-context-provider";
import { Product } from "../Products.model";

type ProductTileProps = {
  product: Product;
};

function ProductTile({ product }: ProductTileProps) {
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext as CartContextType;

  return (
    <div className={styles.product}>
      <header>
        <span className={styles.tag}>{product.category}</span>
        <h3>{product.title}</h3>
      </header>
      <div className={styles.product__content}>
        <img src={product.image} alt="product image" />
      </div>
      <footer className={styles.product__footer}>
        <h4 className={styles.product__price}>${product.price}</h4>
        <button className={styles.cartBtn} onClick={() => addToCart(product)}>
          Add to cart
        </button>
      </footer>
    </div>
  );
}

export default ProductTile;
