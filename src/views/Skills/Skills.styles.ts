import styled, { keyframes } from "styled-components";

export const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
  margin: 15px;
  backdrop-filter: blur(3px);
  padding: 15px;
  background-color: rgba(31, 41, 55, 0.6);
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  margin-top: 50px;
  gap: 10px;
  overflow-y: auto;
  word-break: break-word;
`;

export const Header = styled.span`
  color: ${({ theme: { palette } }) => palette.primary.main};
  font-weight: bold;
  font-size: 25px;
`;

export const Grow = (width: number) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${width}%;
  }
`;

export const SkillConatainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row: repeat(2, 1fr);
  width: 100%;
  gap: 10px;
  padding: 10px;
`;
export const SkillLabel = styled.div`
  color: ${({ theme: { palette } }) => palette.common.white};
  font-weight: bold;
  font-size: 20px;
`;

export const SkillBar = styled.div`
  background-color: lightgray;
  height: 15px;
  border-radius: 15px;
  width: 80%;
`;
interface SkillBarColourProps {
  width: number;
}
export const SkillBarColour = styled.div<SkillBarColourProps>`
  background-color: ${({ theme: { palette } }) => palette.primary.main};
  width: ${({ width }) => width};
  height: 15px;
  border-radius: 15px;
  animation: ${(props) => Grow(props.width)} 1.5s forwards;
`;
// timeline
const containerShadow = "0.5rem 0.5rem 2rem 0 rgba(black, 0.2)";
const borderWidth = "4px";
const dotDiameter = "8px";
const gutter = "30px";

export const TimeLineRoot = styled.div`
  justify-content: center;
  /* min-height: 100vh; */
  width: 100%;
  margin: 0;
  font-weight: 300;
  /* color: #333; */
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;

export const Timeline = styled.div`
  width: 100%;
  max-width: 800px;
  background: transparent;
  position: relative;
  box-shadow: ${containerShadow};
  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: calc(33% + 15px);
    bottom: 0px;
    width: ${borderWidth};
    background: #ddd;
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;
export const TimeLinePoint = styled.div`
  clear: both;
  text-align: left;
  position: relative;
`;

export const TimelineTitleRoot = styled.span`
  margin-bottom: 0.5em;
  float: left;
  width: 33%;
  text-align: right;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: ${dotDiameter};
    height: ${dotDiameter};
    border: ${({ theme: { palette } }) =>
      `${borderWidth} solid ${palette.primary.main}`};
    background-color: #fff;
    border-radius: 100%;
    top: 15%;
    right: -25px;
    z-index: 99;
  }
`;

export const TimelineTitle = styled.h3`
  margin: 0;
  font-size: 120%;

  color: ${({ theme: { palette } }) => palette.primary.main};
`;

export const TimelineText = styled.p`
  margin: 0;
  font-size: 100%;
  color: ${({ theme: { palette } }) => palette.common.white};
`;

//body

export const TimelineBodyRoot = styled.div`
  margin: 0 0 3em;
  float: right;
  width: 66%;
  padding-left: ${gutter};
  color: ${({ theme: { palette } }) => palette.common.white};
`;

export const TimelineBodyText = styled.p`
  line-height: 1.4em;
  &:first-child {
    margin-top: 0;
    font-weight: 400;
  }
`;

export const TimelineBodyList = styled.ul`
  padding-left: 0;
  list-style-type: none;
`;
export const TimelineBodyListItem = styled.li`
  &:before {
    content: "–";
    margin-right: 0.5em;
  }
`;

export const HighlightText = styled.span`
  color: ${({ theme: { palette } }) => palette.primary.main};
  font-weight: bold;
`;
