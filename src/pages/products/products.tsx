import { ProductProps } from "../../features/contentful/products/types";
import useSWR from "swr";
import ProductHeader from "../../features/contentful/products/components/ProductHeader";

const productsQuery = `
query {
  productCollection {
    items {
      title
      link
      date
      description
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
      <ul>
        {products.map((product) => {
          return (
            <li key={product.title}>
              <ProductHeader {...product} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
