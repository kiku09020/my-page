import { ProductProps } from "../../features/contentful/products/productTypes";
import useSWR from "swr";
import ProductHeader from "../../features/contentful/products/components/ProductHeader";
import { Grid2 } from "@mui/material";
import { Suspense } from "react";
import LoadingSpinner from "../../features/contentful/products/components/LoadingSpinner";

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
  const { data, error } = useSWR(productsQuery);
  const products: ProductProps[] = data?.productCollection?.items || [];

  products.filter((product) => {
    product.date = new Date(product.date);
    return product;
  });

  if (error) return <div>Failed to load</div>;

  console.log(`Data:${data}`);

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Grid2 container spacing={2} sx={{ pt: 4, justifyContent: "center" }}>
          {products
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map((product) => {
              return <ProductHeader {...product} />;
            })}
        </Grid2>
      </Suspense>
    </>
  );
}
