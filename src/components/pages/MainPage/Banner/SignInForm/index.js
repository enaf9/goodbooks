import React from "react";

//styled components imports
import StyledSignInForm from "./StyledSignInForm";
import Text from "./Text";
import SignInButton from "./SignInButton";
import NavLink from "./NavLink";

// components imports
import InputField from "../../../../../shared-stlyed-components/InputField";

const SignInForm = () => {
  return (
    <StyledSignInForm>
      <Text>
        Přihlaš se a objev svoji novou <strong>oblíbenou knížku</strong>
      </Text>
      <form>
        <InputField white type="text" placeholder="Email" bottom="15px" />
        <InputField white type="text" placeholder="Heslo" />
        <SignInButton blue> Přihlásit</SignInButton>
      </form>
      <small>
        Ještě nemáš účet? <NavLink to="/registration">Zaregistruj se!</NavLink>
      </small>
    </StyledSignInForm>
  );
};

export default SignInForm;
