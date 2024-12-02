export type ProductProps = {
  title: string;
  link: string;
  date: Date;
  description: string;
  tags: string[];
  frameworks: string[];
  headerImage: {
    url: string;
  };
};
