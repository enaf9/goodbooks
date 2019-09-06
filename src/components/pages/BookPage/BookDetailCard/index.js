import React from "react";
import Rating from "../../../Rating/index";
import Media from "react-media";

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

const BookDetailCard = props => {
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
                  average={props.avgRating}
                  count={props.ratingCount.toString()}
                  medium
                />
              ) : (
                <Rating size="16" average="4.7" count="53245" small />
              )
            }
          </Media>
        </div>
      </Container>
    </Wrapper>
  );
};

export default BookDetailCard;
