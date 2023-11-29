import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Cart,
  CartContext,
  CartContextType,
} from "../../providers/cart-context-provider";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem/CartItem";
import Button from "./../Button/Button";

function ShoppingCart() {
  const navigate = useNavigate();

  const cartContext = useContext(CartContext);
  const { cart } = cartContext as CartContextType;

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const getTotalPrice = () => {
      let total = 0;
      cart.forEach((item: Cart) => {
        total += item.price * item.quantity;
      });

      setTotalPrice(total);
    };

    getTotalPrice();
  }, [cart]);

  const goToProducts = (): void => {
    navigate("/products");
  };

  console.log("cart", cart);

  return (
    <div className={styles.container}>
      <h2>Your cart items</h2>
      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.length > 0 && (
        <>
          <div className={styles.content}>
            {cart.map((item: Cart) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <p>
            Total price: <strong>${totalPrice.toFixed(2)}</strong>
          </p>
        </>
      )}

      <footer className={styles.footer}>
        <Button handleClick={goToProducts}>Continue shopping</Button>
        {cart.length > 0 && <Button handleClick={() => {}}>Checkout</Button>}
      </footer>
    </div>
  );
}

export default ShoppingCart;
