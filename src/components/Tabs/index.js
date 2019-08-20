import React from "react";

//styled components import
import Wrapper from "./Wrapper";

//components import
import Tab from "./Tab";

const Tabs = props => {
  const tabs = props.tabs.map(tab => <Tab name={tab.name} to={tab.to} />);

  return <Wrapper length={props.tabs.length}>{tabs}</Wrapper>;
};

export default Tabs;
