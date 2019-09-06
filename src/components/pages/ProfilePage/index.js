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
import LoadingWrapper from "./LoadingWrapper";

import { ReactComponent as Loading } from "../../../images/loading.svg";

const ProfilePage = props => {
  let content;
  const currentTab = useSelector(state => state.tabReducer);
  const loggedUser = useSelector(state => state.loggedReducer);
  const [user, setUser] = useState({});
  const [userLoaded, setUserLoaded] = useState(false);

  const [favoritesBooks, setFavoritesBooks] = useState([]);
  const [toReadBooks, setToReadBooks] = useState([]);
  const [currentlyReadingBooks, setCurrentlyReadingBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  const [favoritesBooksLoaded, setFavoritesBooksLoaded] = useState(false);
  const [toReadBooksLoaded, setToReadBooksLoaded] = useState(false);
  const [
    currentlyReadingBooksLoaded,
    setCurrentlyReadingBooksLoaded
  ] = useState(false);
  const [readBooksLoaded, setReadBooksLoaded] = useState(false);

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
        setFavoritesBooks([...favoriteBooks]);
        setFavoritesBooksLoaded(true);
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

        setToReadBooks([...toReadBooks]);
        setToReadBooksLoaded(true);
      });
    };

    const getCurrentlyReadingBooks = () => {
      let promises = user.currentlyReadingBooks.map(book => {
        return db
          .collection("books")
          .doc(book)
          .get();
      });
      Promise.all(promises).then(currentlyReadings => {
        let currentlyReadingBooks = [];
        for (let currentlyRead of currentlyReadings) {
          currentlyReadingBooks.push({
            ...currentlyRead.data(),
            id: currentlyRead.id
          });
        }

        setCurrentlyReadingBooks([...currentlyReadingBooks]);
        setCurrentlyReadingBooksLoaded(true);
      });
    };

    const getReadBooks = () => {
      let promises = user.readBooks.map(book => {
        return db
          .collection("books")
          .doc(book)
          .get();
      });
      Promise.all(promises).then(reads => {
        let readBooks = [];
        for (let read of reads) {
          readBooks.push({
            ...read.data(),
            id: read.id
          });
        }

        setReadBooks([...readBooks]);
        setReadBooksLoaded(true);
      });
    };

    if (userLoaded) {
      getFavoritesBooks();
      getToReadBooks();
      getCurrentlyReadingBooks();
      getReadBooks();
    }
  }, [userLoaded]);

  const renderBookSections = () => {
    if (
      toReadBooksLoaded &&
      favoritesBooksLoaded &&
      currentlyReadingBooksLoaded &&
      readBooksLoaded
    ) {
      return (
        <BookSections
          readBooks={readBooks}
          favoritesBooks={favoritesBooks}
          toReadBooks={toReadBooks}
          currentlyReadingBooks={currentlyReadingBooks}
          readBooks={readBooks}
        />
      );
    } else {
      return (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      );
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
