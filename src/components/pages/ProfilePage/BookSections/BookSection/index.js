import React, { useState } from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Container from "./Container";
import SectionName from "./SectionName";
import Text from "./Text";
import PlusIcon from "../../../../../shared-styled-components/PlusIcon";

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
      <AddBookOverlay
        isOpen={addFormOpen}
        section={props.section}
        closeOverlay={closeOverlay}
      />
      <Wrapper>
        <Container>
          <SectionName>{props.section}</SectionName>
          {ownProfile ? <PlusIcon size="20" onClick={handleClick} /> : null}
        </Container>
        <Text to={`/all-books/:userId/${props.id}`}>Zobraziť vše</Text>
      </Wrapper>
      <BookList section={props.id} />
    </div>
  );
};

export default BookSection;