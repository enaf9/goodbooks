import React, { useState } from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Container from "./Container";
import SectionName from "./SectionName";
import Text from "./Text";
import PlusIcon from "../../../../../shared-styled-components/PlusIcon";
import MessageWrapper from "./MessageWrapper";

//components imports
import BookList from "./BookList";
import AddBookOverlay from "../../../../overlays/AddBookOverlay";

const BookSection = props => {
  const [addFormOpen, setAddFormOpen] = useState(false);
  const ownProfile = window.location.pathname.includes("my-profile");

  const handleClick = () => {
    setAddFormOpen(true);
  };

  const closeOverlay = () => {
    setAddFormOpen(false);
  };
  return (
    <div>
      <>
        <AddBookOverlay
          isOpen={addFormOpen}
          section={props.section}
          closeOverlay={closeOverlay}
          id={props.id}
        />
        <Wrapper>
          <Container>
            <SectionName>{props.section}</SectionName>

            {ownProfile ? <PlusIcon size="20" onClick={handleClick} /> : null}
          </Container>
          <Text to={`/all-books/${props.userId}/${props.id}`}>
            Zobrazit vše
          </Text>
        </Wrapper>
        {props.msg ? (
          <MessageWrapper>{props.msg}</MessageWrapper>
        ) : props.books ? (
          <BookList books={props.books} section={props.id} />
        ) : (
          "loading"
        )}
      </>
    </div>
  );
};

export default BookSection;
