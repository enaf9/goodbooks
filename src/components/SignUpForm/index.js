import React, { useState } from "react";

//styled components imports
import StyledForm from "./StyledForm";
import InputField from "../../shared-styled-components/InputField";
import StyledButton from "./StyledButton";

import { auth, db } from "../../firebase";
import { setMsg } from "../../store/actions/authActions";

const SignUpForm = () => {
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
      setMsg(msg);
    } catch (error) {
      msg = `Při registraci nastala chyba: ${error}`;
      setMsg(msg);
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
