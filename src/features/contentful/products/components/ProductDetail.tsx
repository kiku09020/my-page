import { ProductProps } from "../types";
import { Box, Card, Divider, Link, Stack, Typography } from "@mui/material";
import ChipStack from "../../../../components/ChipStack";
import { HomeRepairService, LocalOffer } from "@mui/icons-material";
import LinkWithIcon from "../../../../components/LinkWithIcon";
import MediaCarousel from "../../../../components/MediaCarousel";

export default function ProductDetail(product: ProductProps) {
  const images = product.imagesCollection.items;
  const links = product.productLinksCollection.items;
  const videoLinks = links.filter((link) => link.isVideoLink);

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
      {/* 日付 */}
      <Typography variant="subtitle1" color="secondary">
        {product.date.toLocaleDateString("ja-JP")}
      </Typography>
      {/* 画像カルーセル */}
      <MediaCarousel
        links={videoLinks
          .map((item) => ({ src: item.url, alt: item.title, isVideoLink: true }))
          .concat(images.map((item) => ({ src: item.url, alt: item.title, isVideoLink: false })))}
      />

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
            {links.map((link) =>
              link.isVideoLink ? null : LinkWithIcon({ url: link.url, title: link.title })
            )}
          </Stack>

          <Divider />

          {/* タグなど */}
          <ChipStack title="タグ" icon={<LocalOffer></LocalOffer>} chips={product?.tags} />
          <ChipStack
            title="フレームワーク"
            icon={<HomeRepairService></HomeRepairService>}
            chips={product?.frameworks}
          />
        </Stack>
      </Stack>
    </Card>
  );
}
