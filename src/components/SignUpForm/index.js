import React, { useState } from "react";
import { useDispatch } from "react-redux";

//styled components imports
import StyledForm from "./StyledForm";
import InputField from "../../shared-styled-components/InputField";
import StyledButton from "./StyledButton";

import { signUp } from "../../store/actions/authActions";

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

    const test = await dispatch(signUp(user));
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
