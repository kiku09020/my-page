export type SkillProps = {
  title: string;
  category: {
    id: number;
    category: string;
  };
  iconLink: string;
  isBeginner: boolean;
  years: number;
  rating: number;
  description: string;
};
