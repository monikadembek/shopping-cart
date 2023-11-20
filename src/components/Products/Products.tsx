import useSWR from "swr";
import fetcher from "../../helpers/fetcher";
import { Loader } from "react-feather";
import ProductTile from "./ProductTile/ProductTile";
import { Product } from "./Products.model";
import {
  Container,
  ProductsContainer,
  LoaderContainer,
} from "./Products.styles";

function Products() {
  const {
    data,
    error,
    isLoading,
  }: { data: Product[]; error: any; isLoading: boolean } = useSWR(
    "https://fakestoreapi.com/products",
    fetcher,
  );

  console.log("data", data);

  if (error) return <div>Failed to load products</div>;
  if (isLoading)
    return (
      <LoaderContainer>
        <Loader width={40} height={40} fill={"#aecaff"} className="icon" />
      </LoaderContainer>
    );

  return (
    <Container>
      <h2 className="header">Products</h2>
      <ProductsContainer>
        {data?.map((product: Product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </Container>
  );
}

export default Products;
