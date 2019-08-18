import React from "react";
import BookImage from "../../../../images/Books/big_archiv-bourne-zare-cesta-kralu-iRU-114615.jpg";
import Rating from "../../../Rating/index";

//styled components imports
import BookName from "./BookName";
import Container from "./Container";
import Image from "./Image";
import AuthorName from "./AuthorName";
import BookGenres from "./BookGenres";
import Released from "./Released";
import Series from "./Series";
import GreyText from "./GreyText";

const BookDetailCard = () => {
  return (
    <>
      <BookName>Cesta králů</BookName>
      <Container>
        <Image src={BookImage} />
        <div>
          <AuthorName>Brandon Sanderson</AuthorName>
          <BookGenres>fantasy | romány</BookGenres>
          <Released>
            Vydáno: <GreyText>2012, Talpress</GreyText>
          </Released>
          <Series>
            Série: <GreyText>Archiv Bouřné záře (1.)</GreyText>
          </Series>
          <Rating size="16" average="3.0" count="53245" small />
        </div>
      </Container>
    </>
  );
};

export default BookDetailCard;
