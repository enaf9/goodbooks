import React, { useEffect, useState } from "react";
import { db } from "../../../../firebase";

//styled components imports
import StyledList from "./StyledList";
import SectionText from "./SectionText";

import BookItemBox from "../../../BookItemBox";
import UserItemBox from "../../../UserItemBox";

const ResultList = props => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getResults = async () => {
      let snapshot = await db
        .collection("books")
        .where("keywords", "array-contains", props.searchText)
        .limit(5)
        .get();

      const booksResults = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      snapshot = await db
        .collection("authors")
        .where("keywords", "array-contains", props.searchText)
        .limit(5)
        .get();

      const authorsResults = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      snapshot = await db
        .collection("users")
        .where("keywords", "array-contains", props.searchText)
        .limit(5)
        .get();

      const usersResults = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setBooks(booksResults);
      setAuthors(authorsResults);
      setUsers(usersResults);
    };

    getResults();
  }, [props.searchText]);

  const renderBooks = () => {
    let bookList;
    switch (users.length + authors.length) {
      case 0:
        bookList = books.map(book => <BookItemBox data={book} />);
        break;
      case 1:
        bookList = books.slice(0, 4).map(book => <BookItemBox data={book} />);
        break;
      case 2:
        bookList = books.slice(0, 3).map(book => <BookItemBox data={book} />);
        break;
      default:
        bookList = books.slice(0, 2).map(book => <BookItemBox data={book} />);
        break;
    }
    return bookList;
  };

  const renderAuthors = () => {
    let authorList;
    switch (users.length + books.length) {
      case 0:
        authorList = authors.map(author => <UserItemBox data={author} />);
        break;
      case 1:
        authorList = authors
          .slice(0, 4)
          .map(author => <UserItemBox data={author} />);
        break;
      case 2:
        authorList = authors
          .slice(0, 3)
          .map(author => <UserItemBox data={author} />);
        break;
      default:
        authorList = authors
          .slice(0, 2)
          .map(author => <UserItemBox data={author} />);
        break;
    }
    return authorList;
  };

  const renderUsers = () => {
    let usersList;
    switch (authors.length + books.length) {
      case 0:
        usersList = users.map(user => <UserItemBox data={user} />);
        break;
      case 1:
        usersList = users.slice(0, 4).map(user => <UserItemBox data={user} />);
        break;
      case 2:
        usersList = users.slice(0, 3).map(user => <UserItemBox data={user} />);
        break;
      case 3:
        usersList = users.slice(0, 2).map(user => <UserItemBox data={user} />);
        break;
      default:
        usersList = users.slice(0, 1).map(user => <UserItemBox data={user} />);
        break;
    }
    return usersList;
  };
  return (
    <StyledList onClick={props.closeSearchBar}>
      <SectionText>{books.length ? "Knihy" : ""}</SectionText>
      {books.length ? renderBooks() : ""}
      <SectionText>{authors.length ? "Autoři" : ""}</SectionText>
      {authors.length ? renderAuthors() : ""}
      <SectionText>{users.length ? "Uživatelé" : ""}</SectionText>
      {users.length ? renderUsers() : null}
    </StyledList>
  );
};

export default ResultList;
