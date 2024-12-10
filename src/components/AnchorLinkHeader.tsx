import { Typography } from "@mui/material";

type AnchorLinkHeaderProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title: string;
  id: string;
};

export default function AnchorLinkHeader({ variant = "h4", title, id }: AnchorLinkHeaderProps) {
  return (
    <Typography variant={variant} component={variant} id={id} sx={{ pt: 4 }}>
      {title}
    </Typography>
  );
}
