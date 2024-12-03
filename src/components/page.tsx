import { Typography } from "@mui/material";

type PageProps = {
  title: string;
  children: React.ReactNode;
};

export default function Page({ title, children }: PageProps) {
  return (
    <div>
      <Typography variant="h4">{title}</Typography>
      {children}
    </div>
  );
}
