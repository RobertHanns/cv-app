import styled, { keyframes } from "styled-components";
import Image from "../../images/background.png";
export const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  height: 95%;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  background-image: url(${Image});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TextContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  backdrop-filter: blur(3px);
  padding: 15px;
  background-color: rgba(31, 41, 55, 0.6);
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  width: 65%;
  row-gap: 10px;
  @media (max-width: 700px) {
    width: 90%;
  }
  color: ${({ theme: { palette } }) => palette.common.white};
`;

export const Header = styled.span`
  font-size: 65px;
  @media (max-width: 700px) {
    font-size: 50px;
  }
  font-weight: bold;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 25px;
  @media (max-width: 700px) {
    font-size: 15px;
  }
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

const textClip = keyframes`
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
  animation: ${textClip} 6s ease infinite;
  display: inline-block;
`;

export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
  align-content: center;
  column-gap: 5px;
  margin-top: 10px;
`;

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  padding: 8px;
  font-size: 20px;
  @media (max-width: 700px) {
    font-size: 15px;
  }
  color: ${({ theme: { palette } }) => palette.common.white};
  border-radius: 8px;
  background-color: transparent;
  border: 2px solid;
  border-color: ${({ primary, theme: { palette } }) =>
    primary ? palette.primary.main : palette.common.white};
  &:hover {
    box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.3);
  }
`;

export const FileLink = styled.a`
  text-decoration: none;
`;

export const LogoContainer = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  column-gap: 5px;
  justify-content: center;
  align-content: center;
  font-size: 40px;
`;

export const Link = styled.a`
  transition: all 0.2s ease-out;
  color: ${({ theme: { palette } }) => palette.common.white};
  &:hover {
    color: ${({ theme: { palette } }) => palette.primary.main};
    opacity: 1;
    transition: all 0.2s ease-in;
  }
`;
