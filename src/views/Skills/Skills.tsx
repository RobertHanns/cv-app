import { skillsData } from "./Skills.data";
import * as Styles from "./Skills.styles";

export const Skills = () => {
  return (
    <Styles.Root>
      <Styles.Header>Skills</Styles.Header>
      <Styles.Header>Experience</Styles.Header>
      <div>
        {skillsData.map(({ name, skill }) => {
          return (
            <Styles.SkillConatainer key={name}>
              <Styles.SkillLabel>{name}</Styles.SkillLabel>
              <Styles.SkillBar>
                <Styles.SkillBarColour width={skill} />
              </Styles.SkillBar>
            </Styles.SkillConatainer>
          );
        })}
      </div>
      <Styles.TimeLineRoot>
        <Styles.Timeline>
          <Styles.TimeLinePoint>
            <Styles.TimelineTitleRoot>
              <Styles.TimelineTitle>Civil Service 🏢</Styles.TimelineTitle>
              <Styles.TimelineText>2018 - present</Styles.TimelineText>
            </Styles.TimelineTitleRoot>
            <Styles.TimelineBodyRoot>
              <Styles.TimelineBodyText>
                Worked on multiple projects, focused on both front and back end
                systems.
              </Styles.TimelineBodyText>
              <Styles.TimelineBodyList>
                <Styles.TimelineBodyListItem>
                  <Styles.HighlightText>Intern</Styles.HighlightText>: Built
                  a&nbsp;
                  <Styles.HighlightText>React</Styles.HighlightText> front end
                  for an established system.
                </Styles.TimelineBodyListItem>
                <Styles.TimelineBodyListItem>
                  <Styles.HighlightText>
                    Graduate software engineer
                  </Styles.HighlightText>
                  :&nbsp;Worked on multiple projects using&nbsp;
                  <Styles.HighlightText>Java Springboot</Styles.HighlightText>
                  &nbsp;,
                  <Styles.HighlightText>c# (.net)</Styles.HighlightText>,&nbsp;
                  <Styles.HighlightText> React</Styles.HighlightText>.
                </Styles.TimelineBodyListItem>
                <Styles.TimelineBodyListItem>
                  <Styles.HighlightText>
                    Senior software engineer
                  </Styles.HighlightText>
                  : Lead front end development on a greenfield project
                  using&nbsp;
                  <Styles.HighlightText>React</Styles.HighlightText>,&nbsp;
                  <Styles.HighlightText>Typescript</Styles.HighlightText>,&nbsp;
                  <Styles.HighlightText>Node</Styles.HighlightText>,&nbsp;
                  <Styles.HighlightText>terraform</Styles.HighlightText>,&nbsp;
                  <Styles.HighlightText>AWS</Styles.HighlightText>,&nbsp;
                  <Styles.HighlightText>K8s</Styles.HighlightText>.
                </Styles.TimelineBodyListItem>
              </Styles.TimelineBodyList>
            </Styles.TimelineBodyRoot>
          </Styles.TimeLinePoint>

          <Styles.TimeLinePoint>
            <Styles.TimelineTitleRoot>
              <Styles.TimelineTitle>
                King's College London 📚
              </Styles.TimelineTitle>
              <Styles.TimelineText>2015 - 2018</Styles.TimelineText>
            </Styles.TimelineTitleRoot>
            <Styles.TimelineBodyRoot>
              <Styles.TimelineBodyText>
                BSC (Hons) Computer Science & management
              </Styles.TimelineBodyText>
              <Styles.TimelineBodyList>
                <Styles.TimelineBodyListItem>
                  Graduated with frist class honours
                </Styles.TimelineBodyListItem>
              </Styles.TimelineBodyList>
            </Styles.TimelineBodyRoot>
          </Styles.TimeLinePoint>

          <Styles.TimeLinePoint>
            <Styles.TimelineTitleRoot>
              <Styles.TimelineTitle>Nandos 🐔</Styles.TimelineTitle>
              <Styles.TimelineText>2013 - 2015</Styles.TimelineText>
            </Styles.TimelineTitleRoot>
            <Styles.TimelineBodyRoot>
              <Styles.TimelineBodyText>Waiter</Styles.TimelineBodyText>
              <Styles.TimelineBodyList></Styles.TimelineBodyList>
            </Styles.TimelineBodyRoot>
          </Styles.TimeLinePoint>
        </Styles.Timeline>
      </Styles.TimeLineRoot>
    </Styles.Root>
  );
};
