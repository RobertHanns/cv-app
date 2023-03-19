import { DefaultTheme } from "styled-components";

interface IPalette {
  main: string;
  contrastText: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    buttonBorder: string;
    border: string;
    palette: {
      common: {
        black: string;
        white: string;
        grey: string;
        lightMain: string;
      };
      primary: IPalette;
      secondary: IPalette;
      disabled: IPalette;
    };
  }
}

export const defaultTheme: DefaultTheme = {
  borderRadius: "7px",
  buttonBorder: "1px solid",
  border: "2px solid",
  palette: {
    common: {
      black: "#222831",
      white: "#ffffff",
      grey: "#bdbdbd",
      lightMain: "#6634d13d",
    },
    primary: {
      main: "#02F6B1",
      contrastText: "#CAFF8A",
    },
    secondary: {
      main: "#DDF45B",
      contrastText: "#138A36",
    },
    disabled: {
      main: "transparent",
      contrastText: "grey",
    },
  },
};
