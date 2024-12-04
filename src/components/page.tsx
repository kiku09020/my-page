import { Box, Typography } from "@mui/material";

type PageProps = {
  title: string;
  children: React.ReactNode;
};

export default function Page({ title, children }: PageProps) {
  return (
    <Box>
      <Typography variant="h3">{title}</Typography>
      {children}
    </Box>
  );
}
