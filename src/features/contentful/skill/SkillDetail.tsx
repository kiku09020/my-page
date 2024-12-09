import { Box, Card, Divider, Rating, Typography } from "@mui/material";
import { SkillProps } from "./skillTypes";

export default function SkillDetail(skill: SkillProps) {
  return (
    <Card sx={{ width: 768, p: 4, borderRadius: 4 }}>
      {/* タイトル */}
      <Typography variant="h5">{skill.title}</Typography>

      {/* アイコン */}
      <Box
        component="img"
        src={skill.iconLink}
        alt={skill.title}
        sx={{ height: 96, py: 2, m: "auto" }}
      />

      {/* 熟練度、年数など */}
      <Box display={"flex"} flexDirection="row">
        <Typography>熟練度　：</Typography>
        <Rating value={skill.rating} precision={0.5} readOnly size="small" />
      </Box>
      <Typography>経験年数：{skill.years}</Typography>

      {/* 説明 */}
      <Divider sx={{ my: 2 }} />
      <Typography sx={{ whiteSpace: "pre-wrap" }}>{`${skill.description}`}</Typography>
    </Card>
  );
}
