import React, { useState } from "react";
import { useSelector } from "react-redux";

import Rating from "../../../Rating/index";
import Media from "react-media";
import { db } from "../../../../firebase";

//styled components imports
import Wrapper from "./Wrapper";
import BookName from "./BookName";
import Container from "./Container";
import Image from "./Image";
import AuthorName from "./AuthorName";
import BookGenres from "./BookGenres";
import Released from "./Released";
import Series from "./Series";
import GreyText from "./GreyText";

import BookStatusBar from "./BookStatusBar/index";
import InfoMessage from "../../../pop-ups/InfoMessage";

const BookDetailCard = props => {
  const [avgRating, setAvgRating] = useState(props.avgRating);
  const [ratingCount, setRatingCount] = useState(props.ratingCount);
  const user = useSelector(state => state.loggedReducer.id);
  const [message, setMessage] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const renderSeries = () => {
    if (props.series.title === undefined) {
      return (
        <Series>
          <GreyText></GreyText>
        </Series>
      );
    } else {
      return (
        <Series>
          Série:
          <GreyText>
            {` ${props.series.title} (${props.series.sequence}.)`}
          </GreyText>
        </Series>
      );
    }
  };

  const getRating = async rating => {
    if (user) {
      const alreadyRated = await db
        .collection("users")
        .doc(user)
        .collection("ratings")
        .where("bookTitle", "==", props.title)
        .where("author", "==", props.author.name)
        .get();

      const alreadyReviewed = await db
        .collection("users")
        .doc(user)
        .collection("userReviews")
        .doc(props.id)
        .get();

      if (!alreadyRated.docs.length && !alreadyReviewed.data()) {
        setAvgRating(
          Math.round(
            ((avgRating * ratingCount + rating) / (ratingCount + 1)) * 10
          ) / 10
        );
        setRatingCount(ratingCount + 1);
        AddRating(rating);

        return;
      }
      setMessage(<InfoMessage msg="Kniha byla již ohodnocená." />);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
      return;
    }
    setMessage(<InfoMessage msg="Pro hodnocení se musíš přihlásit." />);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  const AddRating = rating => {
    db.collection("users")
      .doc(user)
      .collection("ratings")
      .doc(props.id)
      .set({
        author: props.author.name,
        bookTitle: props.title,
        coverImage: props.image,
        rating: rating
      });

    db.collection("books")
      .doc(props.id)
      .update({
        avgRating:
          Math.round(
            ((avgRating * ratingCount + rating) / (ratingCount + 1)) * 10
          ) / 10,
        ratingCount: ratingCount + 1
      });
  };

  return (
    <Wrapper>
      <BookName>{props.title}</BookName>
      <Container>
        <div>
          <Image src={props.image} />
          <BookStatusBar bookId={props.id} />
        </div>
        <div>
          <AuthorName>{props.author.name}</AuthorName>
          <BookGenres>fantasy | romány</BookGenres>
          <Released>
            Vydáno:
            <GreyText>
              {` ${props.release.releaseDate.toDate().getFullYear()}, ${
                props.release.publisher
              }`}
            </GreyText>
          </Released>
          {renderSeries()}
          <Media query="(min-width: 768px)">
            {matches =>
              matches ? (
                <Rating
                  size="24"
                  average={avgRating.toString()}
                  count={ratingCount.toString()}
                  sendRating={getRating}
                  medium
                  rating
                />
              ) : (
                <Rating
                  size="16"
                  average={avgRating.toString()}
                  count={ratingCount.toString()}
                  sendRating={getRating}
                  small
                  rating
                />
              )
            }
          </Media>
        </div>
      </Container>
      {showMessage && message}
    </Wrapper>
  );
};

export default BookDetailCard;
