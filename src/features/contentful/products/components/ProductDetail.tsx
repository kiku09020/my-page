import { ProductProps } from "../types";
import { Box, Card, Divider, Link, Stack, Typography } from "@mui/material";
import ChipStack from "../../../../components/ChipStack";
import { HomeRepairService, LocalOffer } from "@mui/icons-material";
import LinkWithIcon from "../../../../components/LinkWithIcon";

export default function ProductDetail(product: ProductProps) {
  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Card raised sx={modalStyle}>
      {/* 基本情報 */}
      <Typography variant="h4">{product.title}</Typography>
      <Box
        component={"img"}
        src={product.headerImage.url}
        alt={product.title}
        width={256}
        m="auto"
        sx={{ display: "flex" }}
      />

      <Divider />

      {/* 詳細 */}
      <Typography height={128}>{product.description}</Typography>

      {/* リンク */}
      <Stack direction="row" spacing={1}>
        {product.productLinksCollection?.items?.map((link) =>
          LinkWithIcon({ url: link.url, title: link.title })
        )}
      </Stack>

      <Divider />

      {/* タグなど */}
      <Stack direction="column" spacing={3}>
        <ChipStack title="タグ" icon={<LocalOffer></LocalOffer>} chips={product.tags} />
        <ChipStack
          title="フレームワーク"
          icon={<HomeRepairService></HomeRepairService>}
          chips={product.frameworks}
        />
      </Stack>
    </Card>
  );
}
