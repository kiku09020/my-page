import { GitHub, Public, X, YouTube } from "@mui/icons-material";
import { Link, Stack } from "@mui/material";

type Props = {
  url: string;
  title: string;
  icon?: React.ReactNode;
};

type LinkIconPair = {
  title: string;
  icon: React.ReactNode;
};

export default function LinkWithIcon(props: Props) {
  const linkIconPairs = [
    { title: "X", icon: <X /> },
    { title: "YouTube", icon: <YouTube /> },
    { title: "GitHub", icon: <GitHub /> },
  ] as LinkIconPair[];

  // アイコン取得
  const linkIcon = linkIconPairs.find((pair) => pair.title === props.title)?.icon ?? props.icon ?? (
    <Public />
  );

  return (
    <Stack direction="row" spacing={1}>
      {linkIcon}
      <Link href={props.url} underline="hover">
        {props.title}
      </Link>
    </Stack>
  );
}
