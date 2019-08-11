import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "../../utils-styled-components/global";
import { ThemeProvider } from "styled-components";
import theme from "../../utils-styled-components/themes";

//styled components imports
import Content from "./Content";
import Wrapper from "./Wrapper";

//components imports
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import MainPage from "../pages/MainPage/index";
import MenuOverlay from "../overlays/MenuOverlay/index";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Content>
          <Navbar />
          <MenuOverlay />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={MainPage} />
            </Switch>
          </Wrapper>
        </Content>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
