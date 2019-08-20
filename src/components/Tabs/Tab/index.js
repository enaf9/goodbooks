import React from "react";
import { withRouter } from "react-router";

//styled components import
import StyledTab from "./StyledTab";
import Name from "./Name";
import UnderLine from "./UnderLine";

const Tab = props => {
  return (
    <StyledTab to={props.to}>
      {props.location.pathname === props.to ? (
        <>
          <Name active>{props.name}</Name>
          <UnderLine active />
        </>
      ) : (
        <>
          <Name>{props.name}</Name>
          <UnderLine />
        </>
      )}
    </StyledTab>
  );
};

export default withRouter(Tab);
