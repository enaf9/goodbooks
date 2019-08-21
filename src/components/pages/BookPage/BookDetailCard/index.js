import React from "react";
import BookImage from "../../../../images/Books/big_archiv-bourne-zare-cesta-kralu-iRU-114615.jpg";
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

const BookDetailCard = () => {
  return (
    <Wrapper>
      <BookName>Cesta králů</BookName>
      <Container>
        <div>
          <Image src={BookImage} />
          <BookStatusBar />
        </div>
        <div>
          <AuthorName>Brandon Sanderson</AuthorName>
          <BookGenres>fantasy | romány</BookGenres>
          <Released>
            Vydáno: <GreyText>2012, Talpress</GreyText>
          </Released>
          <Series>
            Série: <GreyText>Archiv Bouřné záře (1.)</GreyText>
          </Series>
          <Media query="(min-width: 768px)">
            {matches =>
              matches ? (
                <Rating size="24" average="4.7" count="53245" medium />
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
