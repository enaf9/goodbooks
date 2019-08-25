import React from "react";

//styled components imports
import StyledForm from "./StyledForm";
import InputField from "../../shared-styled-components/InputField";
import StyledButton from "./StyledButton";

//components imports

const SignInForm = () => {
  return (
    <StyledForm>
      <InputField type="text" placeholder="E-mail" />
      <InputField type="password" placeholder="Heslo" />
      <StyledButton>Přihlásit</StyledButton>
    </StyledForm>
  );
};

export default SignInForm;