import React from "react";

import { useSelector, useDispatch } from "react-redux";
import setTabActive from "../../../store/actions/tabActions";

//styled components import
import StyledTab from "./StyledTab";
import Name from "./Name";
import UnderLine from "./UnderLine";

const Tab = props => {
  const currentTab = useSelector(state => state.tabReducer);
  const dispatch = useDispatch();

  const handleClick = e => {
    dispatch(setTabActive(props.id));
  };

  return (
    <StyledTab onClick={handleClick}>
      {Number(currentTab) === props.id ? (
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

export default Tab;
