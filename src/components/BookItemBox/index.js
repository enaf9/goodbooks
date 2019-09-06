import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Image from "./Image";
import BookName from "./BookName";
import AuthorName from "./AuthorName";

const BookItemBox = props => {
  return (
    <Wrapper to={"/book/1"}>
      {/* <Wrapper to={"/book/" + props.data.id }> */}
      <Image src={""} />
      {/* <Image src={props.data ? props.data.coverImage : ""} /> */}
      <div>
        <BookName>Cesta králů</BookName>
        {/* <BookName>{props.data.title }</BookName> */}
        <AuthorName>Brandon Sanderson</AuthorName>
        {/* <AuthorName>{props.data.author.name}</AuthorName> */}
      </div>
    </Wrapper>
  );
};

export default BookItemBox;
