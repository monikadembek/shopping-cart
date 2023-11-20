import { useContext } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../../../helpers/fetcher";
import { Loader } from "react-feather";
import {
  LoaderContainer,
  StyledProduct,
  Tag,
  Button,
} from "./ProductDetails.styles";
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
      <LoaderContainer>
        <Loader width={40} height={40} fill={"#aecaff"} className="icon" />
      </LoaderContainer>
    );

  return (
    <StyledProduct>
      <header>
        <h3>{product.title}</h3>
        <Tag>{product.category}</Tag>
      </header>
      <div>
        <img src={product.image} alt="product image" />
        <div className="description">{product.description}</div>
      </div>
      <footer className="footer">
        <h4 className="price">${product.price}</h4>
        <Button onClick={() => addToCart(product)}>Add to cart</Button>
      </footer>
    </StyledProduct>
  );
}

export default ProductDetails;
