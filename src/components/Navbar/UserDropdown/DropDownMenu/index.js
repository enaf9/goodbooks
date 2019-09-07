import React from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../../firebase";
import { signOut } from "../../../../store/actions/loggedActions";

import Wrapper from "./Wrapper";

const DropDownMenu = props => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    await auth.signOut();
    dispatch(signOut());
    props.close();
  };

  return <Wrapper onClick={handleClick}>Odhlásit</Wrapper>;
};

export default DropDownMenu;
