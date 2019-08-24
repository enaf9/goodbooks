import React from "react";

//styled components imports
import StyledForm from "./StyledForm";
import StyledInputField from "./StyledInputField";
import TextArea from "../../../../../shared-styled-components/TextArea";
import Wrapper from "./Wrapper";
import Button from "../../../../../shared-styled-components/Button";

//components imports
import Rating from "../../../../Rating/index";

const AddReviewForm = props => {
  return (
    <StyledForm isOpen={props.isOpen}>
      <StyledInputField type="text" placeholder="Nadpis" />
      <br />
      <TextArea placeholder="Text recenze" />
      <Wrapper>
        <Rating size="24" />
        <Button>Přidat</Button>
      </Wrapper>
    </StyledForm>
  );
};

export default AddReviewForm;
