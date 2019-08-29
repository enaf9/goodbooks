import React, { useState } from "react";
import { useDispatch } from "react-redux";

//styled components imports
import StyledForm from "./StyledForm";
import InputField from "../../shared-styled-components/InputField";
import StyledButton from "./StyledButton";

import { auth, db } from "../../firebase";
import { setSignUpMsg } from "../../store/actions/messagesActions";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmationPassword: ""
  });

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let msg = "";
    try {
      const cred = await auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      await db
        .collection("users")
        .doc(cred.user.uid)
        .set({ username: user.username });
      msg = "Uživatel byl úspěšně zaregistrován.";
      dispatch(setSignUpMsg({ type: "succes", msg }));
    } catch (error) {
      msg = `Při registraci nastala chyba: ${error}`;
      dispatch(setSignUpMsg({ type: "error", msg }));
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputField
        type="text"
        placeholder="Uživatelské jméno"
        name="username"
        value={user.username}
        onChange={handleChange}
        required
      />
      <InputField
        type="email"
        placeholder="E-mail"
        name="email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <InputField
        type="password"
        placeholder="Heslo"
        name="password"
        value={user.password}
        onChange={handleChange}
        required
      />
      <InputField
        type="password"
        placeholder="Potvrzení hesla"
        name="confirmationPassword"
        value={user.confirmationPassword}
        onChange={handleChange}
        required
      />
      <StyledButton>Registrovat</StyledButton>
    </StyledForm>
  );
};

export default SignUpForm;
