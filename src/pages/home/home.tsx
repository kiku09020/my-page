import { Stack, Typography } from "@mui/material";
import WavyText from "../../components/AnimationText/WavyText";
import LinkStack from "../../features/contentful/links/components/LinkStack";
import LoadingSpinner from "../../features/contentful/products/components/LoadingSpinner";
import { Suspense } from "react";
import AvatarIcon from "../../components/AvatarIcon";

export default function Home() {
  return (
    <>
      {/* 情報 */}
      <WavyText text="Welcome to my page!" moveY={5} textDelay={0.05} />
      <Stack direction="column" sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        <AvatarIcon />
        <Typography align="center" sx={{ mt: 2 }}>
          ゲーム好きエンジニアで～す
        </Typography>
      </Stack>

      {/* Links */}
      <Suspense fallback={<LoadingSpinner />}>
        <LinkStack />
      </Suspense>
    </>
  );
}
