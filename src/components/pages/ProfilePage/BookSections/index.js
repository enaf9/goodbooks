import React from "react";

//styled components imports
import Line from "./Line";
import StyledBookSections from "./StyledBookSections";

//components imports
import BookSection from "./BookSection";

const BookSections = () => {
  return (
    <StyledBookSections>
      <BookSection section="Oblíbené" id="1" />
      <Line />
      <BookSection section="Chci číst" id="2" />
      <Line />
      <BookSection section="Právě čtu" id="3" />
      <Line />
      <BookSection section="Přečtené" id="4" />
    </StyledBookSections>
  );
};

export default BookSections;
