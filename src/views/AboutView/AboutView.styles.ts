import styled, { keyframes } from "styled-components";
import Image from "../../images/background.png";

export const Root = styled.div`
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
  height: 100vh;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  backdrop-filter: blur(3px);
  padding: 15px;
  background-color: rgba(255, 0, 34, 0.1);
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  margin-top: 100px;
  width: 70%;
  color: ${({ theme: { palette } }) => palette.common.white};
`;

export const Header = styled.span`
  font-size: 5vw;
  font-weight: bold;
  text-align: center;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: 2vw;
  word-wrap: break-word;
  max-width: 100%;
  text-align: center;
  margin: auto;
  width: 75%;
`;

export const Colour = styled.span`
  font-weight: bold;
  color: ${({ theme: { palette } }) => palette.primary.main};
`;

const textclip = keyframes`
  to {
    background-position: 200% center;
  }
`;

export const AnimatedFont = styled.div`
  /* text-transform: uppercase; */
  background-image: linear-gradient(
    -225deg,
    #fefe6e 0%,
    #00a2d5 29%,
    #02f6b1 67%,
    #7f2982 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${textclip} 2s linear infinite;
  display: inline-block;
  /* font-size: 7; */
`;
