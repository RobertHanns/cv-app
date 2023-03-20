import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Paths } from "../../Routes";
import * as Styles from "./About.styles";
export const About = () => {
  const navigate = useNavigate();
  const handleSkillsClick = useCallback(() => {
    navigate(Paths.cv);
  }, [navigate]);
  return (
    <Styles.Root>
      <Styles.Container>
        <Styles.TextContainer>
          <Styles.Header>
            Hi<Styles.Colour>,</Styles.Colour> I'm{" "}
            <Styles.AnimatedFont>Rob.</Styles.AnimatedFont>
          </Styles.Header>
          <Styles.Text>
            I am a <Styles.Colour>London</Styles.Colour> based&nbsp;
            <Styles.Colour>Full stack software engineer</Styles.Colour>.&nbsp;I
            am currently working in the public sector helping to build&nbsp;
            <Styles.Colour>modern, user focused, type-safe&nbsp;</Styles.Colour>
            React applications.
          </Styles.Text>
          <Styles.ButtonGrid>
            <Styles.Button primary onClick={handleSkillsClick}>
              Skills
            </Styles.Button>
            <Styles.Button>Contact</Styles.Button>
          </Styles.ButtonGrid>
        </Styles.TextContainer>
      </Styles.Container>
    </Styles.Root>
  );
};
