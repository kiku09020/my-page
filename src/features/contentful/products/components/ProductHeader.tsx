import { useState } from "react";
import { ProductProps } from "../types";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import ProductDetail from "./ProductDetail";
import ChipStack from "../../../../components/ChipStack";
import { LocalOffer } from "@mui/icons-material";

export default function ProductHeader(product: ProductProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  //------------------------------------------------------------

  return (
    <div key={product.title}>
      <Card variant="outlined" sx={{ maxWidth: 256 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height={140}
            image={product.headerImage.url}
            alt={product.title}
          />
          <CardContent>
            <Typography variant="h5">{product.title}</Typography>
            <ChipStack chips={product.tags} />
          </CardContent>
        </CardActionArea>
      </Card>

      <Modal open={isOpen} onClose={handleClose}>
        <ProductDetail {...product} />
      </Modal>
    </div>
  );
}
