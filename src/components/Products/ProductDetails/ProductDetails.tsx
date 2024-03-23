import { useContext } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import fetcher from "../../../helpers/fetcher";
import { Loader } from "react-feather";
import { LoaderContainer, StyledProduct, Tag } from "./ProductDetails.styles";
import { Product } from "../Products.model";
import Button from "../../Button/Button";
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
  } = useSWR(`https://fakestoreapi.com/products/${id}`, fetcher);

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
        <h3>{(product as Product).title}</h3>
        <Tag>{(product as Product).category}</Tag>
      </header>
      <div>
        <img src={(product as Product).image} alt="product image" />
        <div className="description">{(product as Product).description}</div>
      </div>
      <footer className="footer">
        <h4 className="price">${(product as Product).price}</h4>
        <Button handleClick={() => addToCart(product as Product)}>
          Add to cart
        </Button>
      </footer>
    </StyledProduct>
  );
}

export default ProductDetails;
