import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./Routes";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./Theme";
import { GlobalStyle } from "./GlobalStyles";
import { AppBar } from "./components/AppBar/AppBar";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <AppBar />
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
