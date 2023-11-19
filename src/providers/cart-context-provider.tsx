import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Product } from "../components/Products/Products.model";

export type Cart = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export type CartContextType = {
  cart: Cart[];
  addToCart: (product: Product) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({ children }: PropsWithChildren) {
  const [cart, setCart]: [Cart[], Dispatch<SetStateAction<Cart[]>>] = useState<
    Cart[]
  >([]);

  console.log("cart: ", cart);

  const addToCart = (product: Product): void => {
    let nextCart: Cart[] = [...cart];
    const isProductInCart = nextCart.find(
      (item: Cart) => item.id === product.id,
    );
    if (isProductInCart) {
      nextCart.forEach((item: Cart) => {
        if (item.id === product.id) {
          item.quantity += 1;
        }
      });
    } else {
      nextCart.push({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.image,
        quantity: 1,
      });
    }
    setCart(nextCart);
  };

  const value: CartContextType = {
    cart,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
