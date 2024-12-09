import { Box, Card, CardActionArea, CardContent, Modal, Rating, Typography } from "@mui/material";
import { SkillProps } from "../../types/skillTypes";
import { useState } from "react";
import SkillDetail from "./SkillDetail";

export default function SkillHeader(skill: SkillProps) {
  const [isOpen, setIsOpen] = useState(false);

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
          bgcolor: "gray",
          width: 196,
        }}
      >
        <CardActionArea onClick={handleOpen}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h6">{skill.title}</Typography>
            <Box component="img" src={skill.iconLink} alt={skill.title} sx={{ px: 6, py: 2 }} />
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
