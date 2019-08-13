import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import toggleMenu from "../../../store/actions/menuActions";

//styled components imports
import Wrapper from "./Wrapper";
import Line from "./Line";

const MenuIcon = () => {
  const dispatch = useDispatch();
  const menuActive = useSelector(state => state.menuReducer);

  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <Wrapper onClick={handleClick}>
      {menuActive ? (
        <>
          <Line first active />
          <Line second active />
          <Line third active />
        </>
      ) : (
        <>
          <Line first />
          <Line second />
          <Line third />
        </>
      )}
    </Wrapper>
  );
};

export default MenuIcon;
