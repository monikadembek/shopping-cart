import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StyledProductTile, Tag, Button } from "./ProductTile.style";
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
    <StyledProductTile onClick={() => goToProductDetails(product.id)}>
      <header>
        <Tag>{product.category}</Tag>
        <h3>{product.title}</h3>
      </header>
      <div className="content">
        <img src={product.image} alt="product image" />
      </div>
      <footer className="footer">
        <h4 className="price">${product.price}</h4>
        <Button onClick={(e) => handleBtnClick(e, product)}>Add to cart</Button>
      </footer>
    </StyledProductTile>
  );
}

export default ProductTile;
