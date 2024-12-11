import { Avatar, Box, Button, Typography } from "@mui/material";

type Props = {
  enableButton?: boolean;
};

export default function AvatarIcon({ enableButton = true }: Props) {
  const userIcon = "motio.svg";

  const buttonDisplay = (defaultStyle: string = ""): string => {
    return enableButton ? defaultStyle : "none";
  };

  return (
    <>
      <Button disabled={!enableButton} href="/profile" sx={{ width: 64, height: 64, m: "auto" }}>
        <Avatar
          className={buttonDisplay("hover:scale-[125%] transition")}
          sx={{ width: 64, height: 64, m: "auto" }}
        >
          <Box component="img" src={userIcon} sx={{ width: "100%" }} />
        </Avatar>
      </Button>
      <Typography align="center" sx={{ mt: 2 }}>
        きくぴぃ
      </Typography>
    </>
  );
}
