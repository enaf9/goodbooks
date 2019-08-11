import React from "react";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "../../utils-styled-components/global";
import { ThemeProvider } from "styled-components";
import theme from "../../utils-styled-components/themes";

//styled components imports
import Content from "./Content";

//components imports
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Content>
          <Navbar />
        </Content>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
