import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Paths } from "../../Routes";
import * as Styles from "./AppBar.styles";

export const AppBar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleNavigateClick = useCallback(
    (path: string) => (_: React.MouseEvent) => {
      navigate(path);
    },
    [navigate]
  );

  return (
    <Styles.Root>
      <Styles.NavigationGrid>
        <Styles.NavigationButton
          selected={pathname === Paths.about}
          onClick={handleNavigateClick(Paths.about)}
        >
          About
        </Styles.NavigationButton>
        <Styles.NavigationButton
          selected={pathname === Paths.cv}
          onClick={handleNavigateClick(Paths.cv)}
        >
          Skills
        </Styles.NavigationButton>
      </Styles.NavigationGrid>
    </Styles.Root>
  );
};
