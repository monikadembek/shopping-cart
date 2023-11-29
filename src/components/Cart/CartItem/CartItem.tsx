import { useContext, useEffect, useState } from "react";
import {
  Cart,
  CartContext,
  CartContextType,
} from "../../../providers/cart-context-provider";
import Button from "./../../Button/Button";
import styles from "./CartItem.module.scss";

function CartItem({ item }: { item: Cart }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const cartContext = useContext(CartContext);
  const { updateProductQuantity } = cartContext as CartContextType;

  useEffect(() => {
    updateProductQuantity(item.id, quantity);
  }, [quantity]);

  console.log("cart item: ", item);

  const add = () => {
    const nextQuantity = quantity + 1;
    setQuantity(nextQuantity);
  };

  const remove = () => {
    const nextQuantity = quantity - 1;
    setQuantity(nextQuantity);
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__imageContainer}>
        <img src={item.image} alt="product image" />
      </div>
      <div className={styles.cartItem__content}>
        <h2>{item.title}</h2>
        <h3>Price: ${item.price}</h3>
        <div className={styles.cartItem__counter}>
          <Button handleClick={remove}>-</Button>
          <span className={styles.cartItem__quantity}>{quantity}</span>
          <Button handleClick={add}>+</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
