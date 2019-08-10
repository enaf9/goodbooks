import React from "react";

import GlobalStyle from "../utils-styled-components/global";
import { ThemeProvider } from "styled-components";
import theme from "../utils-styled-components/themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <div className="App" />
      </>
    </ThemeProvider>
  );
}

export default App;
