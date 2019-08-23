import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeForm } from "../../../store/actions/signFormActions";

//styled components imports
import StyledOverlay from "./StyledOverlay";
import CloseIcon from "./CloseIcon";
import StyledLogo from "./StyledLogo";

//components imports
import SignInForm from "../../SignInForm/index";
import Tabs from "../../Tabs";
import SignUpForm from "../../SignUpForm";

const SignInOverlay = () => {
  let content;
  const currentTab = useSelector(state => state.tabReducer);
  const overlayIsOpen = useSelector(state => state.signFormReducer);
  const dispatch = useDispatch();

  const tabs = ["Přihlášení", "Registrace"];

  const closeOverlay = () => {
    dispatch(closeForm());
  };

  switch (currentTab) {
    case 0:
      content = <SignInForm />;
      break;
    case 1:
      content = <SignUpForm />;
      break;
    default:
      content = <SignInForm />;
      break;
  }

  return (
    <StyledOverlay isOpen={overlayIsOpen}>
      <CloseIcon size="24" onClick={closeOverlay} />
      <StyledLogo />
      <Tabs tabs={tabs} />
      {content}
    </StyledOverlay>
  );
};

export default SignInOverlay;
