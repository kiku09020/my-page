import { Avatar, Box, Button, Link, Typography } from "@mui/material";
import { LinkProps } from "../linkTypes";

export default function LinkComponent(link: LinkProps) {
  return (
    <Button
      variant="contained"
      href={link.link}
      target="_blank"
      sx={{
        justifyContent: "left",
        width: "256px",
        borderRadius: 6,

        "&:hover": {
          color: "white",
        },
      }}
    >
      <Avatar variant="rounded" sx={{ ml: 2, bgcolor: "white", borderRadius: 4 }}>
        <Box component="img" src={link.icon.url} sx={{ width: "60%", height: "60%" }} />
      </Avatar>
      <Typography textTransform={"none"} sx={{ pl: 2 }}>
        {link.linkName}
      </Typography>
    </Button>
  );
}
