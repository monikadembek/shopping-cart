import { useContext } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../../../helpers/fetcher";
import { Loader } from "react-feather";
import styles from "./ProductDetails.module.scss";
import { Product } from "../Products.model";
import {
  CartContext,
  CartContextType,
} from "../../../providers/cart-context-provider";

function ProductDetails() {
  const { id } = useParams();

  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext as CartContextType;

  const {
    data: product,
    error,
    isLoading,
  }: { data: Product; error: any; isLoading: boolean } = useSWR(
    `https://fakestoreapi.com/products/${id}`,
    fetcher,
  );

  console.log("product details: ", product);

  if (error) return <div>Failed to load product</div>;
  if (isLoading)
    return (
      <div className={styles.loader}>
        <Loader
          width={40}
          height={40}
          fill={"#aecaff"}
          className={styles.loader__icon}
        />
      </div>
    );

  return (
    <div className={styles.product}>
      <header>
        <h3>{product.title}</h3>
        <span className={styles.tag}>{product.category}</span>
      </header>
      <div className={styles.product__content}>
        <img src={product.image} alt="product image" />
        <div className={styles.product__description}>{product.description}</div>
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

export default ProductDetails;
