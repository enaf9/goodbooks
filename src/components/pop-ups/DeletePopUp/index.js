import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { closePopUp } from "../../../store/actions/deletePopUpActions";

import StyledPopUp from "./StyledPopUp";
import Wrapper from "./Wrapper";
import Button from "./Button";
import Background from "./Background";

const DeletePopUp = () => {
  const popUpIsOpen = useSelector(state => state.deletePopUpReducer);
  const dispatch = useDispatch();

  const closeDeletePopUp = () => {
    dispatch(closePopUp());
  };

  return (
    <>
      <Background isOpen={popUpIsOpen} onClick={closeDeletePopUp} />
      <StyledPopUp isOpen={popUpIsOpen}>
        <p>Opravdu smazat?</p>
        <Wrapper>
          <Button onClick={closeDeletePopUp}>Zrušit</Button>
          <Button>Smazat</Button>
        </Wrapper>
      </StyledPopUp>
    </>
  );
};

export default DeletePopUp;
