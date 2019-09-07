import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import firebase, { db } from "../../../../../firebase";

//styled components imports
import HeartIcon from "../../../../../shared-styled-components/HeartIcon";
import BookmarkPlusIcon from "../../../../../shared-styled-components/BookmarkPlusIcon";
import BookIcon from "../../../../../shared-styled-components/BookIcon";
import CheckIcon from "../../../../../shared-styled-components/CheckIcon";
import IconWrapper from "./IconWrapper"; //added to get target id from icon click (svg/path problem)
import Wrapper from "./Wrapper";

//components imports
import InfoMessage from "../../../../pop-ups/InfoMessage/index";

const BookStatusBar = props => {
  const [heartIcon, setHeartIcon] = useState(false);
  const [bookmarkIcon, setBookmarkIcon] = useState(false);
  const [bookIcon, setBookIcon] = useState(false);
  const [checkIcon, setCheckIcon] = useState(false);
  const [message, setMessage] = useState(null);
  const isLogged = useSelector(state => state.loggedReducer);

  useEffect(() => {
    const isBookInFavorites = async () => {
      const snapshot = await db
        .collection("users")
        .doc(isLogged.id)
        .get();

      if (snapshot.data().favoritesBooks.includes(props.bookId)) {
        setHeartIcon(true);
      }

      if (snapshot.data().currentlyReadingBooks.includes(props.bookId)) {
        setBookIcon(true);
      }

      if (snapshot.data().readBooks.includes(props.bookId)) {
        setCheckIcon(true);
      }

      if (snapshot.data().toReadBooks.includes(props.bookId)) {
        setBookmarkIcon(true);
      }
    };
    if (isLogged.id) {
      isBookInFavorites();
    }
  }, [isLogged.id]);

  const addBookToFavorites = async bookId => {
    await db
      .collection("users")
      .doc(isLogged.id)
      .update({
        favoritesBooks: firebase.firestore.FieldValue.arrayUnion(bookId)
      });
  };

  const removeBookFromFavorites = async bookId => {
    await db
      .collection("users")
      .doc(isLogged.id)
      .update({
        favoritesBooks: firebase.firestore.FieldValue.arrayRemove(bookId)
      });
  };

  const handleClick = e => {
    if (isLogged.id) {
      if (e.target.id === "heartIcon") {
        !heartIcon
          ? addBookToFavorites(props.bookId)
          : removeBookFromFavorites(props.bookId);
        setHeartIcon(!heartIcon);
      } else {
        switch (e.target.id) {
          case "bookmarkIcon":
            setBookmarkIcon(true);
            setBookIcon(false);
            setCheckIcon(false);
            break;
          case "bookIcon":
            setBookIcon(true);
            setBookmarkIcon(false);
            setCheckIcon(false);
            break;
          case "checkIcon":
            setCheckIcon(true);
            setBookmarkIcon(false);
            setBookIcon(false);
            break;
          default:
            break;
        }
      }
    } else {
      setMessage(
        <InfoMessage msg="Pro přihlášení do oblíbených se musíš přihlásit." />
      );
    }
  };

  return (
    <>
      <Wrapper>
        <IconWrapper id="heartIcon" onClick={handleClick}>
          <HeartIcon checked={heartIcon} />
        </IconWrapper>
        <IconWrapper id="bookmarkIcon" onClick={handleClick}>
          <BookmarkPlusIcon checked={bookmarkIcon} />
        </IconWrapper>
        <IconWrapper id="bookIcon" onClick={handleClick}>
          <BookIcon checked={bookIcon} />
        </IconWrapper>
        <IconWrapper id="checkIcon" onClick={handleClick}>
          <CheckIcon checked={checkIcon} />
        </IconWrapper>
      </Wrapper>
      {message}
    </>
  );
};

export default BookStatusBar;
