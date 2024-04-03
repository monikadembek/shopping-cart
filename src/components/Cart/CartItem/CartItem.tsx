import { useContext, useEffect, useState } from "react";
import {
  Cart,
  CartContext,
  CartContextType,
} from "../../../providers/cart-context-provider";
import Button from "./../../Button/Button";
import { StyledCartItem } from "./CartItem.style";

function CartItem({ item }: { item: Cart }) {
  const [quantity, setQuantity] = useState(item.quantity);
  const cartContext = useContext(CartContext);
  const { updateProductQuantity } = cartContext as CartContextType;

  useEffect(() => {
    updateProductQuantity(item.id, quantity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <StyledCartItem className="cartItem">
      <div className="imageContainer">
        <img src={item.image} alt="product image" />
      </div>
      <div className="content">
        <h2>{item.title}</h2>
        <h3>Price: ${item.price}</h3>
        <div className="counter">
          <Button handleClick={remove}>-</Button>
          <span className="quantity">{quantity}</span>
          <Button handleClick={add}>+</Button>
        </div>
      </div>
    </StyledCartItem>
  );
}

export default CartItem;
