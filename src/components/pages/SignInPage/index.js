import React from "react";

//styled components imports
import Title from "./Title";

//components imports
import SignInForm from "../../SignInForm";

const SignInPage = () => {
  return (
    <>
      <Title>Přihlášení</Title>
      <SignInForm />
    </>
  );
};

export default SignInPage;
