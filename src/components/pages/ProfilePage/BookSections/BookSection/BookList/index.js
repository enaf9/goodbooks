import React from "react";

//styled components imports
import StyledBookList from "./StyledBookList";

//components imports
import BookItem from "../../../../../BookItem";
import IconsBar from "./IconsBar";

const BookList = props => {
  const ownProfile = window.location.pathname.includes("my-profile");

  return (
    <StyledBookList>
      <div>
        <BookItem />
        {ownProfile ? <IconsBar section={props.section} /> : null}
      </div>
      <div>
        <BookItem />
        {ownProfile ? <IconsBar section={props.section} /> : null}
      </div>
      <div>
        <BookItem />
        {ownProfile ? <IconsBar section={props.section} /> : null}
      </div>
      <div>
        <BookItem />
        {ownProfile ? <IconsBar section={props.section} /> : null}
      </div>
      <div>
        <BookItem />
        {ownProfile ? <IconsBar section={props.section} /> : null}
      </div>
      <div>
        <BookItem />
        {ownProfile ? <IconsBar section={props.section} /> : null}
      </div>
      <div>
        <BookItem />
        {ownProfile ? <IconsBar section={props.section} /> : null}
      </div>
    </StyledBookList>
  );
};

export default BookList;
