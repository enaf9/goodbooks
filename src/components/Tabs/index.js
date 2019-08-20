import React from "react";

//styled components import
import Wrapper from "./Wrapper";

//components import
import Tab from "./Tab";

const Tabs = () => {
  return (
    <Wrapper>
      <Tab name="Knihy" to="/results/books" active />
      <Tab name="Autoři" to="/results/authors" />
      <Tab name="Uživatelé" to="/results/users" />
    </Wrapper>
  );
};

export default Tabs;
