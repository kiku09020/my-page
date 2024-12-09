import { Box, Divider, Stack, Typography } from "@mui/material";
import useSWR from "swr";
import { LinkProps } from "../linkTypes";
import LinkComponent from "./LinkComponent";
import AnchorLinkHeader from "../../../../components/AnchorLinkHeader";

const query = `
query {
  linkCollection {
    items {
      link
      linkName
      linkCategory{
        id
        category
      }
      icon {
        url
      }
    }
  }
}
`;

export default function LinkStack() {
  const { data, error } = useSWR(query);
  const links: LinkProps[] = data?.linkCollection?.items || [];
  if (error) return <div>Failed to load</div>;

  // カテゴリーごとにリンクをグループ化
  const categoryGroups = links.reduce((acc: { [key: string]: LinkProps[] }, link) => {
    (acc[link.linkCategory.category] ||= []).push(link);
    return acc;
  }, {});

  // カテゴリーIDでソートしたカテゴリ配列を取得
  const sortedCategories = Object.keys(categoryGroups).sort((a, b) => {
    return categoryGroups[a][0].linkCategory.id - categoryGroups[b][0].linkCategory.id;
  });

  //------------------------------------------------------------

  return (
    <Box>
      <AnchorLinkHeader title="Links" id="links" />
      <Stack direction="column" sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
        {
          // ソートされたカテゴリーごとにリンクを表示
          sortedCategories.map((category) => {
            const categoryLinks = categoryGroups[category];

            return (
              <Box key={category}>
                {/* カテゴリ */}
                <Typography variant="h6">{category}</Typography>
                <Divider
                  sx={{ borderBottomWidth: 4, borderStyle: "dashed", borderColor: "gray" }}
                />

                {/* リンク一覧 */}
                <Stack direction="column" sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                  {categoryLinks.map((link) => (
                    <LinkComponent key={link.link} {...link} />
                  ))}
                </Stack>
              </Box>
            );
          })
        }
      </Stack>
    </Box>
  );
}
