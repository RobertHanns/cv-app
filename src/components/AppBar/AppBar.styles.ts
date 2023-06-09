import styled from "styled-components";

export const Root = styled.div`
  background-color: hsla(0, 0%, 9%, 0.9);
  height: 5%;
  align-items: center;
  width: 100%;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  z-index: 99;
`;

export const NavigationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  column-gap: 5px;
`;

interface NavigationButtonProps {
  selected: boolean;
}

export const NavigationButton = styled.button<NavigationButtonProps>`
  padding: 5px;
  font-size: 25px;
  color: ${({ theme: { palette } }) => palette.common.white};
  background-color: transparent;
  border: 0;
  color: ${({ selected, theme: { palette } }) =>
    selected ? palette.primary.main : palette.common.white};
  transition: all 0.2s ease-out;
  &:hover {
    color: ${({ theme: { palette } }) => palette.primary.main};
    opacity: 1;
    transition: all 0.2s ease-in;
  }
`;
