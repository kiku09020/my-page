export type ProductProps = {
  title: string;
  date: Date;
  description: string;
  tags: string[];
  frameworks: string[];
  headerImage: {
    url: string;
  };
  productLinksCollection: {
    items: {
      url: string;
      title: string;
    }[];
  };
};
