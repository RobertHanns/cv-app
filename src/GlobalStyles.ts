import { createGlobalStyle } from "styled-components";
import Image from "./images/background.png";

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-image: url(${Image});
    background-size: cover;
    background-position: center;
    height: 100vh;
}
button {
    cursor: pointer;
}

`;