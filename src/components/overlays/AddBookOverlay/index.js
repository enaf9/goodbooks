import React from "react";

//styled components imports
import Background from "./Background";
import StyledOverlay from "./StyledOverlay";
import Wrapper from "./Wrapper";
import Title from "./Title";
import PlusIcon from "../../../shared-styled-components/PlusIcon";
import CheckIcon from "../../../shared-styled-components/CheckIcon";

//components imports
import SearchInput from "../../SearchInput";
import BookItemBox from "../../BookItemBox";

const AddBookOverlay = props => {
  return (
    <>
      <Background isOpen={props.isOpen} onClick={props.closeOverlay} />
      <StyledOverlay isOpen={props.isOpen}>
        <Title>Přidat do {props.section}</Title>
        <SearchInput />
        <div>
          <Wrapper>
            <BookItemBox />
            <PlusIcon />
          </Wrapper>
          <Wrapper>
            <BookItemBox />
            <CheckIcon />
          </Wrapper>
        </div>
      </StyledOverlay>
    </>
  );
};

export default AddBookOverlay;
