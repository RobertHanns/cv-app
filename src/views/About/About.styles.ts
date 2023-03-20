import styled, { keyframes } from "styled-components";

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
  background-color: rgba(31, 41, 55, 0.6);
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  margin-top: 100px;
  width: 70%;
  color: ${({ theme: { palette } }) => palette.common.white};
`;

export const Header = styled.span`
  font-size: 65px;
  font-weight: bold;
  text-align: center;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: 25px;
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
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
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
  animation: ${textclip} 6s ease infinite;
  display: inline-block;
  /* font-size: 7; */
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  justify-content: center;
  align-content: center;
  column-gap: 15px;
  margin-top: 10px;
`;

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 10px;
  font-size: 20px;
  color: ${({ theme: { palette } }) => palette.common.white};
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid;
  border-color: ${({ primary, theme: { palette } }) =>
    primary ? palette.primary.main : palette.common.white};
  &:hover {
    box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.3);
  }
`;
