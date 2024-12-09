import useSWR from "swr";
import { SkillProps } from "./skillTypes";
import { Box, Stack, Typography } from "@mui/material";
import SkillHeader from "./SkillHeader";
import AnchorLinkHeader from "../../../components/AnchorLinkHeader";

const skillQuery = `
query {
  skillCollection{
    items{
      title
      category{
        id
        category
      }
      iconLink
      isBeginner
      years
      rating
      description
    }
  }
}
`;

// TODO: SkillとLinkの共通化
// src\features\contentful\links\components\LinkStack.tsx
export default function SkillStack() {
  const { data, error } = useSWR(skillQuery);
  const skills: SkillProps[] = data.skillCollection?.items || [];

  const categoryGroups = skills.reduce((acc: { [key: string]: SkillProps[] }, skill) => {
    (acc[skill.category.category] ||= []).push(skill);
    return acc;
  }, {});

  const sortedCategories = Object.keys(categoryGroups).sort((a, b) => {
    return categoryGroups[a][0].category.id - categoryGroups[b][0].category.id;
  });

  if (error) return <div>Failed to load</div>;

  return (
    <Box sx={{ pt: 4 }}>
      <AnchorLinkHeader title="Skills" id="skills" />
      <Stack direction="column" sx={{ display: "flex", justifyContent: "center" }}>
        {sortedCategories.map((category) => {
          const categorySkills = categoryGroups[category];

          return (
            <Box key={category}>
              {/* カテゴリ */}
              <Typography variant="h6">{category}</Typography>
              <Stack direction="row" spacing={2} sx={{ pt: 2, pb: 4 }}>
                {categorySkills.map((skill) => (
                  <SkillHeader key={skill.title} {...skill} />
                ))}
              </Stack>
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
}
