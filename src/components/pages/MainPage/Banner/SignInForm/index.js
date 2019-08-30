import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//styled components imports
import StyledSignInForm from "./StyledSignInForm";
import Text from "./Text";
import SignInButton from "./SignInButton";
import NavLink from "./NavLink";
import Messages from "./Messages";

// components imports
import InputField from "../../../../../shared-styled-components/InputField";

import { auth } from "../../../../../firebase";
import { setSignInMsg } from "../../../../../store/actions/messagesActions";

const SignInForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
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

  return (
    <StyledSignInForm onSubmit={handleSubmit}>
      <Text>
        Přihlaš se a objev svoji novou <strong>oblíbenou knížku</strong>
      </Text>
      <form>
        <InputField
          white
          type="email"
          placeholder="Email"
          bottom="15px"
          name="email"
          value={user.email}
          onChange={handleChange}
          isError={signInMsg.inputType === "email"}
        />
        <InputField
          white
          type="password"
          placeholder="Heslo"
          name="password"
          value={user.password}
          onChange={handleChange}
          isError={signInMsg.inputType === "password"}
        />
        <Messages>{signInMsg.type === "error" ? signInMsg.msg : null}</Messages>
        <SignInButton blue> Přihlásit</SignInButton>
      </form>

      <small>
        Ještě nemáš účet? <NavLink to="/registration">Zaregistruj se!</NavLink>
      </small>
    </StyledSignInForm>
  );
};

export default SignInForm;
