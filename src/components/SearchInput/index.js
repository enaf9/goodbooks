import React from "react";

//styled components imports
import Wrapper from "./Wrapper";
import StyledInputField from "./StyledInputField";
import SearchIcon from "./SearchIcon";

const SearchInput = props => {
  return (
    <Wrapper>
      <SearchIcon size="24" />
      <StyledInputField placeholder="Hledej" onChange={props.filterResults} />
    </Wrapper>
  );
};

export default SearchInput;
