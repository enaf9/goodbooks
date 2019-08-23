import React from "react";

//styled components imports
import Line from "./Line";
import StyledBookSections from "./StyledBookSections";

//components imports
import BookSection from "./BookSection";

const BookSections = () => {
  return (
    <StyledBookSections>
      <BookSection section="Oblíbené" />
      <Line />
      <BookSection section="Chci číst" />
      <Line />
      <BookSection section="Právě čtu" />
      <Line />
      <BookSection section="Přečtené" />
    </StyledBookSections>
  );
};

export default BookSections;
