import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase, { db } from "../../../../../firebase";

import {
  addBookToList,
  removeBookFromList
} from "../../../../../store/actions/loggedActions";

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
  const dispatch = useDispatch();

  useEffect(() => {
    const checkBookLists = async () => {
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
      checkBookLists();
    }
  }, [isLogged.id]);

  const addToBookList = async (bookId, list) => {
    dispatch(addBookToList(bookId, list));
    await db
      .collection("users")
      .doc(isLogged.id)
      .update({
        [list]: firebase.firestore.FieldValue.arrayUnion(bookId)
      });
  };

  const removeFromBooklist = async (bookId, list) => {
    dispatch(removeBookFromList(bookId, list));
    await db
      .collection("users")
      .doc(isLogged.id)
      .update({
        [list]: firebase.firestore.FieldValue.arrayRemove(bookId)
      });
  };

  const handleClick = e => {
    if (isLogged.id) {
      if (e.target.id === "heartIcon") {
        !heartIcon
          ? addToBookList(props.bookId, "favoritesBooks")
          : removeFromBooklist(props.bookId, "favoritesBooks");
        setHeartIcon(!heartIcon);
      } else {
        switch (e.target.id) {
          case "bookmarkIcon":
            if (!bookmarkIcon) {
              addToBookList(props.bookId, "toReadBooks");
              setBookmarkIcon(true);
              setBookIcon(false);
              removeFromBooklist(props.bookId, "currentlyReadingBooks");
              setCheckIcon(false);
              removeFromBooklist(props.bookId, "readBooks");
              break;
            }
            setBookmarkIcon(false);
            break;
          case "bookIcon":
            if (!bookIcon) {
              setBookIcon(true);
              addToBookList(props.bookId, "currentlyReadingBooks");
              setBookmarkIcon(false);
              removeFromBooklist(props.bookId, "toReadBooks");
              setCheckIcon(false);
              removeFromBooklist(props.bookId, "readBooks");
              break;
            }
            setBookIcon(false);
            break;
          case "checkIcon":
            if (!checkIcon) {
              setCheckIcon(true);
              addToBookList(props.bookId, "readBooks");
              setBookmarkIcon(false);
              removeFromBooklist(props.bookId, "toReadBooks");
              setBookIcon(false);
              removeFromBooklist(props.bookId, "currentlyReadingBooks");
              break;
            }
            setCheckIcon(false);
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
