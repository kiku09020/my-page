import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Modal,
  Rating,
  Typography,
  useTheme,
} from "@mui/material";
import { SkillProps } from "../skillTypes";
import { useState } from "react";
import SkillDetail from "./SkillDetail";

export default function SkillHeader(skill: SkillProps) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  //------------------------------------------------------------

  return (
    <Box key={skill.title}>
      <Card
        sx={{
          borderRadius: 4,
          width: 160,
        }}
      >
        <CardActionArea onClick={handleOpen}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* 初心者マーク */}
            {skill.isBeginner && (
              <Avatar sx={{ position: "absolute", top: 48, right: 8, width: 24, height: 24 }}>
                <Typography fontSize={12} textAlign={"center"}>
                  🔰
                </Typography>
              </Avatar>
            )}
            {/* タイトル */}
            <Typography variant="h6">{skill.title}</Typography>
            {/* アイコン画像 */}
            <Box
              component="img"
              src={skill.iconLink}
              alt={skill.title}
              sx={{ height: 96, px: 1, py: 2 }}
            />
            <Rating value={skill.rating} precision={0.5} readOnly size="small" sx={{ m: "auto" }} />
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal
        open={isOpen}
        onClose={handleClose}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box>
          <SkillDetail {...skill} />
        </Box>
      </Modal>
    </Box>
  );
}
