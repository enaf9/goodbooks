import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Image from "./Image";
import BookName from "./BookName";
import AuthorName from "./AuthorName";

const BookItemBox = props => {
  return (
    <Wrapper to={"/book/" + props.data.id}>
      <Image src={props.data.coverImage} />
      <div>
        <BookName>{props.data.title}</BookName>
        <AuthorName>{props.data.author.name}</AuthorName>
      </div>
    </Wrapper>
  );
};

export default BookItemBox;
