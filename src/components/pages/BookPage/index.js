import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import BookDetailCard from "./BookDetailCard/index";
import Tabs from "../../Tabs";
import BookInfoBox from "./BookInfoBox/index";
import Reviews from "./Reviews/index";

//styled components imports
import Description from "./Description";
import LoadingWrapper from "./LoadingWrapper";

import { db } from "../../../firebase";
import { ReactComponent as Loading } from "../../../images/loading.svg";

import setTabActive from "../../../store/actions/tabActions";

const BookPage = props => {
  let content;
  const currentTab = useSelector(state => state.tabReducer);
  const [book, setBook] = useState({});
  const [bookLoaded, setBookLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTabActive(0));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getBook = async () => {
      const snapshot = await db
        .collection("books")
        .doc(props.match.params.id)
        .get();
      setBook(snapshot.data());
      setBookLoaded(true);
    };
    getBook();
  }, [props.match.params.id]);

  const tabs = ["Popis", "Info", "Recenze"];

  switch (currentTab) {
    case 0:
      content = <Description>{book.description}</Description>;
      break;
    case 1:
      content = <BookInfoBox data={{ ...book, id: props.match.params.id }} />;
      break;
    case 2:
      content = (
        <Reviews
          bookId={props.match.params.id}
          title={book.title}
          author={book.author ? book.author.name : ""}
          image={book.coverImage}
          avgRating={book.avgRating}
          ratingCount={book.ratingCount}
        />
      );
      break;
    default:
      content = <Description>{book.description}</Description>;
      break;
  }

  return (
    <>
      {bookLoaded ? (
        <>
          <BookDetailCard
            image={book.coverImage}
            title={book.title}
            author={book.author}
            release={book.release}
            series={book.series}
            avgRating={book.avgRating}
            ratingCount={book.ratingCount}
            id={props.match.params.id}
          />
          <Tabs tabs={tabs} />
          {book ? content : null}
        </>
      ) : (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
    </>
  );
};

export default BookPage;
