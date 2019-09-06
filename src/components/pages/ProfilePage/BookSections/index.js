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
          msg="Žádné knížky k přečtení k zobrazení."
          section="Chci číst"
          id="1"
        />
      ) : (
        <>
          <BookSection books={props.toReadBooks} section="Chci číst" id="2" />
          <Line />
        </>
      )}

      {!props.currentlyReadingBooks.length ? (
        <BookSection
          msg="Žádné aktuálně čtené knížky k zobrazení."
          section="Právě čtu"
          id="1"
        />
      ) : (
        <>
          <BookSection
            books={props.currentlyReadingBooks}
            section="Právě čtu"
            id="3"
          />
          <Line />
        </>
      )}

      {!props.readBooks.length ? (
        <BookSection
          msg="Žádné přečtené knížky k zobrazení."
          section="Přečtené"
          id="1"
        />
      ) : (
        <>
          <BookSection books={props.readBooks} section="Přečtené" id="4" />
        </>
      )}
    </StyledBookSections>
  );
};

export default BookSections;
