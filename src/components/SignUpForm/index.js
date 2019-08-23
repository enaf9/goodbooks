import React from "react";

//styled components imports
import StyledForm from "./StyledForm";
import InputField from "../../shared-styled-components/InputField";
import StyledButton from "./StyledButton";

//components imports

const SignUpForm = () => {
  return (
    <StyledForm>
      <InputField type="text" placeholder="Uživatelské jméno" />
      <InputField type="text" placeholder="E-mail" />
      <InputField type="password" placeholder="Heslo" />
      <InputField type="password" placeholder="Potvrzení hesla" />
      <StyledButton>Registrovat</StyledButton>
    </StyledForm>
  );
};

export default SignUpForm;
