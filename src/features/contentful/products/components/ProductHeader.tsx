import { ProductProps } from "../types";

export default function ProductHeader(product: ProductProps) {
  return (
    <div key={product.title}>
      <img src={product.headerImage.url} alt={product.title} width={256} />
      <h1>{product.title}</h1>
    </div>
  );
}
