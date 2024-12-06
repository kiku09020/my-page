import { useState } from "react";
import { ProductProps } from "../types";
import {
  Backdrop,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Fade,
  Modal,
  Typography,
  useTheme,
  Zoom,
} from "@mui/material";
import ProductDetail from "./ProductDetail";
import ChipStack from "../../../../components/ChipStack";

export default function ProductHeader(product: ProductProps) {
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
    <div key={product.title}>
      <Card variant="outlined" sx={{ width: 256, maxWidth: 256 }}>
        <CardActionArea onClick={handleOpen}>
          {product.headerImage && (
            <Box sx={{ backgroundColor: theme.palette.grey.A400 }}>
              <CardMedia
                component="img"
                image={product.headerImage.url}
                alt={product.title}
                sx={{ p: 4, minHeight: 256 }}
              />
            </Box>
          )}
          <CardContent>
            {/* タイトル、タグ */}
            <Typography variant="h5">{product.title}</Typography>
            <ChipStack chips={product.tags} />
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slotProps={{ backdrop: { timeout: 500 } }}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Zoom in={isOpen}>
          <div>
            <ProductDetail {...product} />
          </div>
        </Zoom>
      </Modal>
    </div>
  );
}
