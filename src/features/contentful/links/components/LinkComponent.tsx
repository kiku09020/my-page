import { Avatar, Box, Button, Link, Typography } from "@mui/material";
import { LinkProps } from "../types";

export default function LinkComponent(link: LinkProps) {
  return (
    <Button
      variant="contained"
      href={link.link}
      target="_blank"
      sx={{
        display: "flex",
        justifyItems: "center",
        width: "50%",
        m: "auto",
        mt: 2,
        borderRadius: 6,
        textTransform: "none",
      }}
    >
      <Avatar variant="rounded" sx={{ bgcolor: "white", borderRadius: 4 }}>
        <Box component="img" src={link.icon.url} sx={{ width: "60%", height: "60%" }} />
      </Avatar>
      <Typography sx={{ ml: 2, width: "20%" }}>{link.linkName}</Typography>
    </Button>
  );
}
