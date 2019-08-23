import React from "react";
import BookImage from "../../images/Books/Kralovna_Stinu.jpg";

//styled components imports
import Wrapper from "./Wrapper";
import Image from "./Image";
import BookName from "./BookName";
import AuthorName from "./AuthorName";

const BookItemBox = () => {
  return (
    <Wrapper>
      <Image src={BookImage} />
      <div>
        <BookName>Královna stínů</BookName>
        <AuthorName>Sarah J. Maas</AuthorName>
      </div>
    </Wrapper>
  );
};

export default BookItemBox;
