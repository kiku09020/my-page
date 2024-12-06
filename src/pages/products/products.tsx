import { ProductProps } from "../../features/contentful/products/types";
import useSWR from "swr";
import ProductHeader from "../../features/contentful/products/components/ProductHeader";
import { Grid2 } from "@mui/material";

const productsQuery = `
query {
  productCollection{
    items {
      title
      date
      description
      productLinksCollection(limit: 5) {
        items {
          url
          title
          isVideoLink
        }
      }
      tags
      frameworks
      headerImage {
        url
      }
      imagesCollection(limit: 6) {
        items {
          url
          title
        }
      }
    }
  }
}


`;

export default function Products() {
  const { data, error, isLoading } = useSWR(productsQuery);
  const products: ProductProps[] = data?.productCollection?.items || [];

  products.filter((product) => {
    product.date = new Date(product.date);
    return product;
  });

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  console.log(`Data:${data}`);

  return (
    <>
      <Grid2 container spacing={2} sx={{ pt: 4, justifyContent: "center" }}>
        {products
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((product) => {
            return <ProductHeader {...product} />;
          })}
      </Grid2>
    </>
  );
}
