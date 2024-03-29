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
          id="favorites"
          userId={props.userId}
        />
      ) : (
        <>
          <BookSection
            books={props.favoritesBooks}
            section="Oblíbené"
            id="favorites"
            userId={props.userId}
          />
          <Line />
        </>
      )}
      {!props.toReadBooks.length ? (
        <BookSection
          msg="Žádné knížky k přečtení k zobrazení."
          section="Chci číst"
          id="to-read"
          userId={props.userId}
        />
      ) : (
        <>
          <BookSection
            books={props.toReadBooks}
            section="Chci číst"
            id="to-read"
            userId={props.userId}
          />
          <Line />
        </>
      )}

      {!props.currentlyReadingBooks.length ? (
        <BookSection
          msg="Žádné aktuálně čtené knížky k zobrazení."
          section="Právě čtu"
          id="currently-reading"
          userId={props.userId}
        />
      ) : (
        <>
          <BookSection
            books={props.currentlyReadingBooks}
            section="Právě čtu"
            id="currently-reading"
            userId={props.userId}
          />
          <Line />
        </>
      )}

      {!props.readBooks.length ? (
        <BookSection
          msg="Žádné přečtené knížky k zobrazení."
          section="Přečtené"
          id="read"
          userId={props.userId}
        />
      ) : (
        <>
          <BookSection
            books={props.readBooks}
            section="Přečtené"
            id="read"
            userId={props.userId}
          />
        </>
      )}
    </StyledBookSections>
  );
};

export default BookSections;
