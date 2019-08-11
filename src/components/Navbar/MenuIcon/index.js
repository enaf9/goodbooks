import React, { useState } from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Line from "./Line";

const MenuIcon = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
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
