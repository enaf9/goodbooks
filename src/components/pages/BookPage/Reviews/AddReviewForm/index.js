import React, { useState, useEffect } from "react";

//styled components imports
import StyledForm from "./StyledForm";
import StyledInputField from "./StyledInputField";
import TextArea from "../../../../../shared-styled-components/TextArea";
import Wrapper from "./Wrapper";
import Button from "../../../../../shared-styled-components/Button";

//components imports
import Rating from "../../../../Rating/index";
import InfoMessage from "../../../../pop-ups/InfoMessage/index";

import { auth } from "../../../../../firebase";

const AddReviewForm = props => {
  const [review, setReview] = useState({ title: "", body: "", rating: 5 });
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {});

  const handleChange = e => {
    setReview({
      ...review,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (auth.currentUser) {
      console.log("je přihlášenej");
    } else {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    }
  };
  return (
    <StyledForm isOpen={props.isOpen} onSubmit={handleSubmit}>
      <StyledInputField
        type="text"
        placeholder="Nadpis"
        name="title"
        value={review.title}
        onChange={handleChange}
      />
      <br />
      {showMessage ? (
        <InfoMessage msg="Pro přidání recenze je potřeba být přihlášený." />
      ) : null}
      <TextArea
        placeholder="Text recenze"
        value={review.body}
        name="body"
        onChange={handleChange}
      />
      <Wrapper>
        <Rating size="24" />
        <Button>Přidat</Button>
      </Wrapper>
    </StyledForm>
  );
};

export default AddReviewForm;
