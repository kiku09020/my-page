import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import AnchorLinkHeader from "../../components/AnchorLinkHeader";
import AvatarIcon from "../../components/AvatarIcon";

export function AboutMe() {
  const rows = [
    "やってること：ゲーム開発、Web開発、モバイルアプリ開発",
    "興味があること：モデリング、VR",
    "好きなもの：インディーゲーム、ドット絵、チップチューン",
  ];

  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      <AnchorLinkHeader id="about-me" title="About Me" />
      <AvatarIcon enableButton={false} />
      <List sx={{ pl: 4, pt: 4, listStyleType: "disc" }}>
        {rows.map((row, index) => (
          <ListItem sx={{ display: "list-item" }} disablePadding>
            <ListItemText key={index}>{row}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
