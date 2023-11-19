import useSWR from "swr";
import fetcher from "../../helpers/fetcher";
import { Loader } from "react-feather";
import styles from "./Products.module.scss";
import ProductTile from "./ProductTile/ProductTile";
import { Product } from "./Products.model";

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
      <div className={styles.loader}>
        <Loader
          width={40}
          height={40}
          fill={"#aecaff"}
          className={styles.loader__icon}
        />
      </div>
    );

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Products</h2>
      <div className={styles.products}>
        {data?.map((product: Product) => (
          <ProductTile key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
