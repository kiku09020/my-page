import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import WavyText from "../../components/AnimationText/WavyText";
import LinkStack from "../../features/contentful/links/components/LinkStack";

export default function Home() {
  const userIcon = "/motio.svg";

  return (
    <>
      {/* 情報 */}
      <WavyText text="Welcome to my page!" moveY={5} textDelay={0.05} />
      <Stack direction="column" sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <Button href="/Profile" sx={{ width: 64, height: 64, m: "auto" }}>
          <Avatar
            className="hover:scale-[125%] transition "
            sx={{ width: 64, height: 64, m: "auto" }}
          >
            <Box component="img" src={userIcon} sx={{ width: "100%" }} />
          </Avatar>
        </Button>
        <Typography align="center" sx={{ mt: 2 }}>
          きくぴぃ
        </Typography>
        <Typography align="center" sx={{ mt: 2 }}>
          ゲーム好きエンジニアで～す
        </Typography>
      </Stack>

      {/* Links */}
      <LinkStack />
    </>
  );
}
