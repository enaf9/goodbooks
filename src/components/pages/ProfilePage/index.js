import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../../../firebase";

//styled components imports
import Wrapper from "./Wrapper";
import StyledProfilePage from "./StyledProfilePage";

//components imports
import UserCard from "../../UserCard/index";
import Tabs from "../../Tabs/index";
import BookSections from "./BookSections";
import ReviewList from "./ReviewList";
import RatingList from "./RatingList";

const ProfilePage = props => {
  let content;
  const currentTab = useSelector(state => state.tabReducer);
  const loggedUser = useSelector(state => state.loggedReducer);
  const [user, setUser] = useState({});
  const [userLoaded, setUserLoaded] = useState(false);
  const [books, setBooks] = useState({
    favorites: [],
    toRead: [],
    currentlyReading: [],
    read: []
  });
  const [booksLoaded, setBooksLoaded] = useState({
    favorites: false,
    toRead: false,
    currentlyReading: true,
    read: true
  });

  useEffect(() => {
    const getUser = async () => {
      const snapshot = await db
        .collection("users")
        .doc(props.match.params.id ? props.match.params.id : loggedUser.id)
        .get();
      setUser({ ...snapshot.data(), id: snapshot.id });
      setUserLoaded(true);
    };

    getUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.id]);

  useEffect(() => {
    const getFavoritesBooks = () => {
      let promises = user.favoritesBooks.map(book => {
        return db
          .collection("books")
          .doc(book)
          .get();
      });
      Promise.all(promises).then(favorites => {
        let favoriteBooks = [];
        for (let favorite of favorites) {
          favoriteBooks.push({ ...favorite.data(), id: favorite.id });
        }
        setBooks({ ...books, favorites: favoriteBooks });
        setBooksLoaded({ ...booksLoaded, favorites: true });
      });
    };

    const getToReadBooks = () => {
      let promises = user.toReadBooks.map(book => {
        return db
          .collection("books")
          .doc(book)
          .get();
      });
      Promise.all(promises).then(toReads => {
        let toReadBooks = [];

        for (let toRead of toReads) {
          toReadBooks.push({ ...toRead.data(), id: toRead.id });
        }
        console.log(toReadBooks);
        setBooks({ ...books, toRead: toReadBooks });
        setBooksLoaded({ ...booksLoaded, toRead: true });
      });
    };

    if (userLoaded) {
      getFavoritesBooks();
      getToReadBooks();
    }
  }, [userLoaded]);

  const renderBookSections = () => {
    if (
      booksLoaded.favorites &&
      booksLoaded.toRead &&
      booksLoaded.currentlyReading &&
      booksLoaded.read
    ) {
      return <BookSections favoritesBooks={books.favorites} />;
    } else {
      console.log(booksLoaded);
      return null;
    }
  };

  const tabs = ["Knihy", "Recenze", "Hodnocení"];
  switch (currentTab) {
    case 0:
      content = <>{renderBookSections()}</>;
      break;
    case 1:
      content = <ReviewList />;
      break;
    case 2:
      content = <RatingList />;
      break;
    default:
      content = <BookSections />;
      break;
  }
  return (
    <StyledProfilePage>
      <UserCard center big image={user.image} name={user.username} profile />
      <Wrapper>
        <Tabs tabs={tabs} />
        {content}
      </Wrapper>
    </StyledProfilePage>
  );
};

export default ProfilePage;
