import { skillsData } from "./Skills.data";
import * as Styles from "./Skills.styles";

export const Skills = () => {
  return (
    <Styles.Root>
      <div>
        <Styles.Header>Skills 💡</Styles.Header>
        {skillsData.map(({ name, skill }) => {
          return (
            <Styles.SkillContainer key={name}>
              <Styles.SkillLabel>{name}</Styles.SkillLabel>
              <Styles.SkillBar>
                <Styles.SkillBarColour width={skill} />
              </Styles.SkillBar>
            </Styles.SkillContainer>
          );
        })}
      </div>
      <Styles.TimeLineRoot>
        <Styles.Header>Experience 🧑‍💻</Styles.Header>
        <Styles.Timeline>
          <Styles.TimeLinePoint>
            <Styles.TimelineTitleRoot>
              <Styles.TimelineTitle>Civil Service 🏢</Styles.TimelineTitle>
              <Styles.TimelineText>2021 - present</Styles.TimelineText>
            </Styles.TimelineTitleRoot>
            <Styles.TimelineBodyRoot>
              <Styles.TimelineBodyText>
                Senior software engineer
              </Styles.TimelineBodyText>
              <Styles.TimelineBodyList>
                <Styles.TimelineBodyListItem>
                  Lead development on a greenfield project to&nbsp;
                  <Styles.HighlightText>
                    query, visualise and interrogate large datasets
                  </Styles.HighlightText>
                  .
                </Styles.TimelineBodyListItem>
                <Styles.TimelineBodyListItem>
                  Implemented agile methodologies for development.
                </Styles.TimelineBodyListItem>
                <Styles.TimelineBodyListItem>
                  Ensured code standards were enforced.
                </Styles.TimelineBodyListItem>
                <Styles.TimelineBodyListItem>
                  Built with&nbsp;
                  <Styles.HighlightText>React</Styles.HighlightText>,&nbsp;
                  <Styles.HighlightText>Typescript</Styles.HighlightText>
                  ,&nbsp;
                  <Styles.HighlightText>Node</Styles.HighlightText>,&nbsp;
                  <Styles.HighlightText>terraform</Styles.HighlightText>
                  ,&nbsp;
                  <Styles.HighlightText>AWS</Styles.HighlightText>,&nbsp;
                  <Styles.HighlightText>K8s</Styles.HighlightText>.
                </Styles.TimelineBodyListItem>
                <Styles.TimelineBodyListItem>
                  multiple iterations developed and continuously deployed
                  via&nbsp;
                  <Styles.HighlightText>Gitlab CICD</Styles.HighlightText>.
                </Styles.TimelineBodyListItem>
              </Styles.TimelineBodyList>
            </Styles.TimelineBodyRoot>
          </Styles.TimeLinePoint>

          <Styles.TimeLinePoint>
            <Styles.TimelineTitleRoot>
              <Styles.TimelineTitle>Civil Service 🏢</Styles.TimelineTitle>
              <Styles.TimelineText>2018 - 2021</Styles.TimelineText>
            </Styles.TimelineTitleRoot>
            <Styles.TimelineBodyRoot>
              <Styles.TimelineBodyText>
                Software engineer
              </Styles.TimelineBodyText>
              <Styles.TimelineBodyList>
                <Styles.TimelineBodyListItem>
                  Joined on a two year graduate programme, working on two
                  projects focused around&nbsp;
                  <Styles.HighlightText>data processing</Styles.HighlightText>
                  &nbsp; and{" "}
                  <Styles.HighlightText>data science</Styles.HighlightText>.
                </Styles.TimelineBodyListItem>
                <Styles.TimelineBodyListItem>
                  Built components and workflows for an automated processing
                  pipeline in&nbsp;
                  <Styles.HighlightText>C# (.net)</Styles.HighlightText>.
                </Styles.TimelineBodyListItem>
                <Styles.TimelineBodyListItem>
                  Built and deployed a live monitoring FE for the processing
                  system using&nbsp;
                  <Styles.HighlightText>React</Styles.HighlightText>.
                </Styles.TimelineBodyListItem>
                <Styles.TimelineBodyListItem>
                  Built and deployed a reactive api to push high volumes of data
                  through a ML model using&nbsp;
                  <Styles.HighlightText>
                    Spring boot (Java)
                  </Styles.HighlightText>
                  .
                </Styles.TimelineBodyListItem>
                <Styles.TimelineBodyListItem>
                  Worked, and improved upon team&nbsp;
                  <Styles.HighlightText>agile principles</Styles.HighlightText>.
                </Styles.TimelineBodyListItem>
                <Styles.TimelineBodyListItem>
                  Supported live&nbsp;
                  <Styles.HighlightText>critical systems</Styles.HighlightText>
                  &nbsp;through multiple incidents.
                </Styles.TimelineBodyListItem>
              </Styles.TimelineBodyList>
            </Styles.TimelineBodyRoot>
          </Styles.TimeLinePoint>

          <Styles.TimeLinePoint>
            <Styles.TimelineTitleRoot>
              <Styles.TimelineTitle>Civil Service 🏢</Styles.TimelineTitle>
              <Styles.TimelineText>Summer 2016</Styles.TimelineText>
            </Styles.TimelineTitleRoot>
            <Styles.TimelineBodyRoot>
              <Styles.TimelineBodyText>
                Intern software engineer
              </Styles.TimelineBodyText>
              <Styles.TimelineBodyList>
                <Styles.TimelineBodyListItem>
                  Built a <Styles.HighlightText>React</Styles.HighlightText>
                  &nbsp;front end for an established record system.
                </Styles.TimelineBodyListItem>
                <Styles.TimelineBodyListItem>
                  Learned agile principles and methodology.
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
                  Graduated with first class honours.
                </Styles.TimelineBodyListItem>
              </Styles.TimelineBodyList>
            </Styles.TimelineBodyRoot>
          </Styles.TimeLinePoint>

          <Styles.TimeLinePoint>
            <Styles.TimelineTitleRoot>
              <Styles.TimelineTitle>Nando's 🐔</Styles.TimelineTitle>
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
