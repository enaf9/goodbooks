import React, { useState } from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Input from "./Input";
import SearchIcon from "./SearchIcon";

const SearchBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
  };

  return (
    <Wrapper onClick={handleClick}>
      {active ? (
        <>
          <Input placeholder="Hledej" active />
          <SearchIcon active />
        </>
      ) : (
        <>
          <Input placeholder="Hledej" />
          <SearchIcon />
        </>
      )}
    </Wrapper>
  );
};

export default SearchBar;
