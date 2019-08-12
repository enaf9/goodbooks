import React, { useState } from "react";
import { useDispatch } from "react-redux";
import toggleMenu from "../../../store/actions/menuActions";

//styled components imports
import Wrapper from "./Wrapper";
import Line from "./Line";

const MenuIcon = () => {
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    setActive(!active);
    dispatch(toggleMenu());
  };

  return (
    <Wrapper onClick={handleClick}>
      {active ? (
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
