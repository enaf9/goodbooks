import React from "react";

//styled components import
import Wrapper from "./Wrapper";

//components import
import Tab from "./Tab";

const Tabs = props => {
  const tabs = props.tabs.map((tab, index) => (
    <Tab name={tab} key={tab} id={index} />
  ));

  return <Wrapper length={props.tabs.length}>{tabs}</Wrapper>;
};

export default Tabs;
