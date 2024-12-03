import { ProductProps } from "../types";
import { Box, Card, Divider, Link, Stack, Typography } from "@mui/material";
import ChipStack from "../../../../components/ChipStack";
import { HomeRepairService, LocalOffer } from "@mui/icons-material";
import LinkWithIcon from "../../../../components/LinkWithIcon";
import ImageCarousel from "../../../../components/ImageCarousel";

export default function ProductDetail(product: ProductProps) {
  const modalStyle = {
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    width: 768,
  };

  return (
    <Card raised sx={modalStyle}>
      {/* タイトル */}
      <Typography variant="h4">{product.title}</Typography>
      {/* 画像カルーセル */}
      <ImageCarousel images={product.imagesCollection.items.map((item) => item.url)} />

      <Divider />

      <Stack
        direction="row"
        spacing={6}
        divider={<Divider variant="middle" orientation="vertical" flexItem />}
        sx={{ justifyContent: "center", p: 2 }}
      >
        {/* 説明 */}
        <Typography width="50%" height={128}>
          {product.description}
        </Typography>

        <Stack direction="column" spacing={3}>
          {/* リンク */}
          <Stack direction="column" spacing={1}>
            {product.productLinksCollection?.items?.map((link) =>
              LinkWithIcon({ url: link.url, title: link.title })
            )}
          </Stack>

          <Divider />

          {/* タグなど */}
          <ChipStack title="タグ" icon={<LocalOffer></LocalOffer>} chips={product.tags} />
          <ChipStack
            title="フレームワーク"
            icon={<HomeRepairService></HomeRepairService>}
            chips={product.frameworks}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
