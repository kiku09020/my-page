import { ProductProps } from "../../features/contentful/products/types";
import useSWR from "swr";
import ProductHeader from "../../features/contentful/products/components/ProductHeader";

const productsQuery = `
query {
  productCollection {
    items {
      title
      date
      description
      productLinksCollection{
        items{
          url
          title
        }
      }
      tags
      frameworks
      headerImage {
        url
      }
    }
  }
}

`;

export default function Products() {
  const { data, error, isLoading } = useSWR(productsQuery);
  const products: ProductProps[] = data?.productCollection?.items || [];

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(`Data:${data}`);

  return (
    <>
      <p>Count:{products.length}</p>
      {products.map((product) => {
        return <ProductHeader {...product} />;
      })}
    </>
  );
}
