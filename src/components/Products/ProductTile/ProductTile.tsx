import { useContext } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext as CartContextType;

  const goToProductDetails = (id: number): void => {
    navigate(`/products/${id}`);
  };

  const handleBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    product: Product,
  ) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      className={styles.product}
      onClick={() => goToProductDetails(product.id)}
    >
      <header>
        <span className={styles.tag}>{product.category}</span>
        <h3>{product.title}</h3>
      </header>
      <div className={styles.product__content}>
        <img src={product.image} alt="product image" />
      </div>
      <footer className={styles.product__footer}>
        <h4 className={styles.product__price}>${product.price}</h4>
        <button
          className={styles.cartBtn}
          onClick={(e) => handleBtnClick(e, product)}
        >
          Add to cart
        </button>
      </footer>
    </div>
  );
}

export default ProductTile;
