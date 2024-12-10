import SkillStack from "../../features/contentful/skill/components/SkillStack";
import { AboutMe } from "./AboutMe";
import History from "./History";

export default function Profile() {
  return (
    <>
      <AboutMe />
      <History />
      <SkillStack />
    </>
  );
}
