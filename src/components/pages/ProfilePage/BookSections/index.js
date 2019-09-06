import React from "react";

//styled components imports
import Line from "./Line";
import StyledBookSections from "./StyledBookSections";

//components imports
import BookSection from "./BookSection";

const BookSections = props => {
  return (
    <StyledBookSections>
      {!props.favoritesBooks.length ? (
        <BookSection
          msg="Žádné oblíbené knížky k zobrazení."
          section="Oblíbené"
          id="1"
        />
      ) : (
        <>
          <BookSection books={props.favoritesBooks} section="Oblíbené" id="1" />
          <Line />
        </>
      )}
      {!props.toReadBooks.length ? (
        <BookSection
          msg="Žádné oblíbené knížky k zobrazení."
          section="Oblíbené"
          id="1"
        />
      ) : (
        <>
          <BookSection books={props.toReadBooks} section="Chci číst" id="2" />
          <Line />
        </>
      )}

      <BookSection books={props.favoritesBooks} section="Právě čtu" id="3" />
      <Line />
      <BookSection books={props.favoritesBooks} section="Přečtené" id="4" />
    </StyledBookSections>
  );
};

export default BookSections;
