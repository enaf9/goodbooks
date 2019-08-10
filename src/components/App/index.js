import React from "react";

import GlobalStyle from "../../utils-styled-components/global";
import { ThemeProvider } from "styled-components";
import theme from "../../utils-styled-components/themes";

import Navbar from "../Navbar/index";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <>
          <Navbar />
        </>
      </>
    </ThemeProvider>
  );
};

export default App;
