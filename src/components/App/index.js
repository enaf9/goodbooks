import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "../../utils-styled-components/global";
import { ThemeProvider } from "styled-components";
import theme from "../../utils-styled-components/themes";
import Footer from "../Footer/index";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <>
          <Footer />
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
