import { AppBar } from "../../components/AppBar/AppBar";
import { Footer } from "../../components/Footer/Footer";
import * as Styles from "./AboutView.styles";
export const AboutView = () => {
  return (
    <Styles.Root>
      <AppBar />
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
            <Styles.Colour>
              modern, user focused React applications.
            </Styles.Colour>
          </Styles.Text>
        </Styles.TextContainer>
      </Styles.Container>
    </Styles.Root>
  );
};
