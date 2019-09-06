import React, { useState, useEffect } from "react";

//styled components imports
import StyledBooksPage from "./StyledBooksPage";
import Title from "./Title";
import Wrapper from "./Wrapper";
import LoadingWrapper from "./LoadingWrapper";
import MessageWrapper from "./MessageWrapper";

//components imports
import BookList from "../../BookList/index";
import UserCard from "../../UserCard";

import { db } from "../../../firebase";

import { ReactComponent as Loading } from "../../../images/loading.svg";

const AllBooksPage = props => {
  const [title, setTitle] = useState("Knihy");
  const [user, setUser] = useState({});
  const [userLoaded, setUserLoaded] = useState(false);
  const [books, setBooks] = useState([]);
  const [booksLoaded, setBooksLoaded] = useState(false);

  useEffect(() => {
    switch (props.match.params.section) {
      case "favorites":
        setTitle("Oblíbené");
        break;
      case "currently-reading":
        setTitle("Právě čtu");
        break;
      case "to-read":
        setTitle("Chci číst");
        break;
      case "read":
        setTitle("Přečtené");
        break;
      default:
        break;
    }

    const getUser = async () => {
      const snapshot = await db
        .collection("users")
        .doc(props.match.params.user)
        .get();
      setUser(snapshot.data());
      setUserLoaded(true);
    };

    getUser();
  }, [props.match.params.section]);

  useEffect(() => {
    if (userLoaded) {
      const getBooks = () => {
        let type = "";
        switch (props.match.params.section) {
          case "favorites":
            type = "favoritesBooks";
            break;
          case "currently-reading":
            type = "currentlyReadingBooks";
            break;
          case "to-read":
            type = "toReadBooks";
            break;
          case "read":
            type = "readBooks";
            break;
          default:
            break;
        }
        let promises = user[type].map(book => {
          return db
            .collection("books")
            .doc(book)
            .get();
        });

        Promise.all(promises).then(books => {
          let userBooks = [];
          for (let book of books) {
            userBooks.push({ ...book.data(), id: book.id });
          }
          setBooks(userBooks);
          setBooksLoaded(true);
        });
      };
      getBooks();
    }
  }, [userLoaded]);

  return (
    <StyledBooksPage>
      <Wrapper>
        {userLoaded ? (
          <UserCard big image={user.image} name={user.username} />
        ) : (
          <LoadingWrapper>
            <Loading />
          </LoadingWrapper>
        )}
      </Wrapper>
      <Title>{title}</Title>
      {booksLoaded ? (
        !books.length ? (
          <MessageWrapper>Žádné knížky k zobrazení.</MessageWrapper>
        ) : (
          <BookList books={books} />
        )
      ) : (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
    </StyledBooksPage>
  );
};

export default AllBooksPage;
