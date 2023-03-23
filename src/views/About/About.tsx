import { useCallback } from "react";
import { MdMailOutline, MdOutlineFileDownload } from "react-icons/md";
import { AiOutlineGithub } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import * as Styles from "./About.styles";
import { Paths } from "../../Routes";

export const About = () => {
  const navigate = useNavigate();
  const handleSkillsClick = useCallback(() => {
    navigate(Paths.cv);
  }, [navigate]);
  return (
    <Styles.Root>
      <Styles.TextContainer>
        <Styles.Header>
          Hi<Styles.Colour>,</Styles.Colour> I'm&nbsp;
          <Styles.AnimatedFont>Rob.</Styles.AnimatedFont>
        </Styles.Header>
        <Styles.Text>
          I am a <Styles.Colour>London</Styles.Colour> based&nbsp;
          <Styles.Colour>Full stack software engineer</Styles.Colour>.&nbsp;I am
          currently working in the public sector helping to build&nbsp;
          <Styles.Colour>modern, user focused, type-safe&nbsp;</Styles.Colour>
          React applications.
        </Styles.Text>
        <Styles.LogoContainer>
          <Styles.Link href="mailto:robert_hanns@hotmail.com?subject=Contact from website">
            <MdMailOutline />
          </Styles.Link>
          <Styles.Link href="https://github.com/RobertHanns">
            <AiOutlineGithub />
          </Styles.Link>
        </Styles.LogoContainer>
        <Styles.ButtonGrid>
          <Styles.FileLink href="./Robert-cv.pdf" download="Robert-cv.pdf">
            <Styles.Button primary>
              Resume <MdOutlineFileDownload />
            </Styles.Button>
          </Styles.FileLink>
          <Styles.Button onClick={handleSkillsClick}>Skills</Styles.Button>
        </Styles.ButtonGrid>
      </Styles.TextContainer>
    </Styles.Root>
  );
};
