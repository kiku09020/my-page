import { Box, Rating, Typography } from "@mui/material";
import { SkillProps } from "./skillTypes";

export default function SkillDetail(skill: SkillProps) {
  return (
    <Box>
      <Typography variant="h6">{skill.title}</Typography>
      <Box component="img" src={skill.iconLink} alt={skill.title} sx={{ px: 6, py: 2 }} />
      <Box display={"flex"} flexDirection="row">
        <Typography>熟練度　：</Typography>
        <Rating value={skill.rating} precision={0.5} readOnly size="small" />
      </Box>
      <Typography>経験年数：{skill.years}</Typography>
      <Typography component="pre">{`${skill.description}`}</Typography>
      <Typography component="pre">{"<b>テスト</b>\nテスト\n"}</Typography>
    </Box>
  );
}
