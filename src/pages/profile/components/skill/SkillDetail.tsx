import { Box, Typography } from "@mui/material";
import { SkillProps } from "../../types/skillTypes";

export default function SkillDetail(skill: SkillProps) {
  const parsedDescription = skill.description.replace(/\\n/g, "\n");

  return (
    <Box>
      <Typography variant="h6">{skill.title}</Typography>
      <Box component="img" src={skill.iconLink} alt={skill.title} sx={{ px: 6, py: 2 }} />
      <Typography>{skill.years} years</Typography>
      <Typography>{skill.rating} stars</Typography>
      <Typography component="pre">{`${parsedDescription}`}</Typography>
      <Typography component="pre">{"テスト\nテスト\n"}</Typography>
    </Box>
  );
}
