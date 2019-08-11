import React, { useState } from "react";

//styled components imports
import Wrapper from "./Wrapper";
import Input from "./Input";
import SearchIcon from "./SearchIcon";

const SearchBar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <Wrapper>
      {active ? (
        <>
          <Input placeholder="Hledej" active />
          <SearchIcon active onClick={handleClick} />
        </>
      ) : (
        <>
          <Input placeholder="Hledej" />
          <SearchIcon onClick={handleClick} />
        </>
      )}
    </Wrapper>
  );
};

export default SearchBar;
