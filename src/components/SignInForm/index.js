import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

//styled components imports
import StyledForm from "./StyledForm";
import InputField from "../../shared-styled-components/InputField";
import StyledButton from "./StyledButton";
import Message from "./Message";

import { auth } from "../../firebase";
import { setSignInMsg } from "../../store/actions/messagesActions";
import { closeForm } from "../../store/actions/signFormActions";

const SignInForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const dispatch = useDispatch();
  const signInMsg = useSelector(state => state.messageReducer.signInMsg);

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let msg;
    let inputType;
    try {
      await auth.signInWithEmailAndPassword(user.email, user.password);
      msg = "Přihlášení proběhlo úspěšně";
      dispatch(setSignInMsg({ type: "success", msg }));
      dispatch(closeForm());
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case "auth/wrong-password":
          msg = "Nesprávné heslo";
          inputType = "password";
          break;
        case "auth/user-not-found":
          msg = "Uživatel nenalezen";
          inputType = "email";
          break;
        case "auth/invalid-email":
          msg = "Nesprávný email";
          inputType = "email";
          break;
        default:
          msg = "Ooops. Nastala chyba";
      }
      dispatch(setSignInMsg({ type: "error", msg, inputType }));
    }
  };

  const renderMessage = () => {
    if (signInMsg.type === "success") {
      console.log(signInMsg.type);
      return <Redirect to="/" />;
    } else if (signInMsg.type === "error") {
      return <Message>{signInMsg.msg}</Message>;
    } else {
      return;
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputField
        type="email"
        placeholder="E-mail"
        name="email"
        value={user.email}
        onChange={handleChange}
        isError={signInMsg.inputType === "email"}
      />
      <InputField
        type="password"
        placeholder="Heslo"
        name="password"
        value={user.password}
        onChange={handleChange}
        isError={signInMsg.inputType === "password"}
      />
      {renderMessage()}
      <StyledButton>Přihlásit</StyledButton>
    </StyledForm>
  );
};

export default SignInForm;
