import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useMemo,
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
  updateProductQuantity: (id: number, quantity: number) => void;
};

export const CartContext = createContext<CartContextType | null>(null);

function CartContextProvider({ children }: PropsWithChildren) {
  const [cart, setCart]: [Cart[], Dispatch<SetStateAction<Cart[]>>] = useState<
    Cart[]
  >([]);

  console.log("cart: ", cart);

  const addToCart = (product: Product): void => {
    const nextCart: Cart[] = [...cart];
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

  const updateProductQuantity = (id: number, quantity: number) => {
    let nextCart: Cart[] = [...cart];

    if (quantity === 0) {
      nextCart = nextCart.filter((item: Cart) => item.id !== id);
    }

    nextCart.forEach((item: Cart) => {
      if (item.id === id) {
        item.quantity = quantity;
      }
    });

    setCart(nextCart);
  };

  const value: CartContextType = useMemo(() => {
    return {
      cart,
      addToCart,
      updateProductQuantity,
    };
  }, [cart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
