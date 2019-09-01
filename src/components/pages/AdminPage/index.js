import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import InputField from "../../../shared-styled-components/InputField";
import Button from "../../../shared-styled-components/Button";

const AdminPage = () => {
  return (
    <Wrapper>
      <h3>Přidat knihu</h3>
      <InputField type="text" placeholder="Jméno autora" />
      <InputField type="text" placeholder="Název knihy" />
      <InputField type="text" />
      <InputField type="text" />
      <InputField type="text" />
      <InputField type="text" />
      <InputField type="text" />
      <InputField type="text" />
      <Button />
    </Wrapper>
  );
};

export default AdminPage;
