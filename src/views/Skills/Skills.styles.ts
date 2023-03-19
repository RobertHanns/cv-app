import styled from "styled-components";

export const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(2, min-content);

  backdrop-filter: blur(3px);
  padding: 15px;
  background-color: rgba(255, 0, 34, 0.1);
  border-radius: ${({ theme: { borderRadius } }) => borderRadius};
  margin-top: 100px;
`;

export const FullWidthItem = styled.div`
  grid-column: 1/-1;
`;

export const Header = styled.span`
  color: ${({ theme: { palette } }) => palette.primary.main};
  font-weight: bold;
  font-size: 25px;
`;
