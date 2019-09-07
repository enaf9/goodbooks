import React, { useState, useEffect } from "react";
import firebase, { db } from "../../../firebase";
import { useSelector, useDispatch } from "react-redux";

import {
  addBookToList,
  removeBookFromList
} from "../../../store/actions/loggedActions";

//styled components imports
import Background from "./Background";
import StyledOverlay from "./StyledOverlay";
import Wrapper from "./Wrapper";
import Title from "./Title";
import PlusIcon from "../../../shared-styled-components/PlusIcon";
import CheckIcon from "../../../shared-styled-components/CheckIcon";

//components imports
import SearchInput from "../../SearchInput";
import BookItemBox from "../../BookItemBox";

const AddBookOverlay = props => {
  const [filterText, setFilterText] = useState("");
  const [books, setBooks] = useState([]);
  const user = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();
  const sections = {
    favorites: {
      list: "favoritesBooks",
      property: "isFavorite",
      remove: "removeFromFavorites"
    },
    "to-read": {
      list: "toReadBooks",
      property: "isToRead"
    },
    read: {
      list: "readBooks",
      property: "isRead"
    },
    "currently-reading": {
      list: "currentlyReadingBooks",
      property: "isCurrentlyReading"
    }
  };
  useEffect(() => {
    const getBooks = async () => {
      const snapshot = await db
        .collection("books")
        .where("keywords", "array-contains", filterText.toLowerCase())
        .limit(5)
        .get();

      const data = snapshot.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id,
          isFavorite: user.favoritesBooks.includes(doc.id),
          isToRead: user.toReadBooks.includes(doc.id),
          isRead: user.readBooks.includes(doc.id),
          isCurrentlyReading: user.currentlyReadingBooks.includes(doc.id)
        };
      });

      setBooks([...data]);
    };

    if (filterText !== "") {
      getBooks();
    } else {
      setBooks([]);
    }
  }, [filterText]);

  const filterResults = e => {
    setFilterText(e.target.value);
  };

  const removeFromBookList = async e => {
    const bookId = e.target.getAttribute("bookId");
    const index = e.target.getAttribute("index");
    let newBooks = books;
    newBooks[index][sections[props.id].property] = false;
    dispatch(removeBookFromList(bookId, sections[props.id].list));
    setBooks([...newBooks]);

    await db
      .collection("users")
      .doc(user.id)
      .update({
        [sections[props.id].list]: firebase.firestore.FieldValue.arrayRemove(
          bookId
        )
      });
  };

  const addToBookList = async e => {
    const bookId = e.target.getAttribute("bookId");
    const index = e.target.getAttribute("index");
    let newBooks = books;
    newBooks[index][sections[props.id].property] = true;

    checkOtherBookLists(sections[props.id].list, bookId);
    dispatch(addBookToList(bookId, sections[props.id].list));
    setBooks([...newBooks]);

    await db
      .collection("users")
      .doc(user.id)
      .update({
        [sections[props.id].list]: firebase.firestore.FieldValue.arrayUnion(
          bookId
        )
      });
  };

  const checkOtherBookLists = (list, bookId) => {
    const removeFromList = async fromList => {
      await db
        .collection("users")
        .doc(user.id)
        .update({
          [fromList]: firebase.firestore.FieldValue.arrayRemove(bookId)
        });
      dispatch(removeBookFromList(bookId, fromList));
    };

    switch (list) {
      case "toReadBooks":
        removeFromList("currentlyReadingBooks");
        removeFromList("readBooks");
        break;
      case "currentlyReadingBooks":
        removeFromList("toReadBooks");
        removeFromList("readBooks");
        break;
      case "readBooks":
        removeFromList("currentlyReadingBooks");
        removeFromList("toReadBooks");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Background isOpen={props.isOpen} onClick={props.closeOverlay} />
      <StyledOverlay isOpen={props.isOpen}>
        <Title>Přidat do {props.section}</Title>
        <SearchInput filterResults={filterResults} />
        <div>
          {books.map((book, index) => (
            <Wrapper>
              <BookItemBox data={book} bottom="0" />
              {book[sections[props.id].property] ? (
                <div
                  onClick={removeFromBookList}
                  bookId={book.id}
                  index={index}
                >
                  <CheckIcon />
                </div>
              ) : (
                <div onClick={addToBookList} bookId={book.id} index={index}>
                  <PlusIcon pointerEvents="none" />
                </div>
              )}
            </Wrapper>
          ))}
        </div>
      </StyledOverlay>
    </>
  );
};

export default AddBookOverlay;
