import React, { useState } from "react";

//styled components imports
import StyledForm from "./StyledForm";
import InputField from "../../shared-styled-components/InputField";
import StyledButton from "./StyledButton";

import { auth, db } from "../../firebase";

const SignUpForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmationPassword: ""
  });

  const [msg, setMsg] = useState(null);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const cred = await auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      await db
        .collection("users")
        .doc(cred.user.uid)
        .set({ username: user.username });

      setMsg("Uživatel byl úspěšně zaregistrován.");
    } catch (error) {
      setMsg(`Při registraci nastala chyba: ${error.msg}`);
    }

    console.log(msg);
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
