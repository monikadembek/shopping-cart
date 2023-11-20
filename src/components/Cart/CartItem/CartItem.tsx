import { useContext, useEffect, useState } from "react";
import {
  Cart,
  CartContext,
  CartContextType,
} from "../../../providers/cart-context-provider";
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

  // const changeQuantity = (quantity: number) => {
  //   console.log("quantity", quantity);
  //   // setQuantity(quantity);
  // };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItem__imageContainer}>
        <img src={item.image} alt="product image" />
      </div>
      <div className={styles.cartItem__content}>
        <h2>{item.title}</h2>
        <h3>Price: ${item.price}</h3>
        <div className={styles.cartItem__counter}>
          <button onClick={remove}>-</button>
          <input
            className={styles.cartItem__input}
            type="text"
            value={quantity}
            name="quantity"
            readOnly={true}
            // onChange={(e) => changeQuantity(+e.target.value)}
          />
          <button onClick={add}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
