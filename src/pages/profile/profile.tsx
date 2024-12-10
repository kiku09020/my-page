import SkillStack from "../../features/contentful/skill/SkillStack";
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
