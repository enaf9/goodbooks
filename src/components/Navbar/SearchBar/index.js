import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import toggleSearchBar from "../../../store/actions/menuSearchBarActions";

//styled components imports
import Wrapper from "./Wrapper";
import Input from "./Input";
import SearchIcon from "./SearchIcon";

import ResultList from "./ResultList";

const SearchBar = props => {
  const [active, setActive] = useState(false);
  const [searchText, setSearchText] = useState("");
  const isMenuSearchBarReducer = useSelector(
    state => state.menuSearchBarReducer
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    setActive(!active);
    if (isMenuSearchBarReducer) {
      setTimeout(() => {
        dispatch(toggleSearchBar());
      }, 700);
    } else {
      dispatch(toggleSearchBar());
    }
  };

  const closeSearchBar = () => {
    setActive(false);
    setSearchText("");
    if (isMenuSearchBarReducer) {
      setTimeout(() => {
        dispatch(toggleSearchBar());
      }, 700);
    } else {
      dispatch(toggleSearchBar());
    }
  };

  const handleChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <Wrapper>
      {active ? (
        <>
          <Input
            placeholder="Hledej"
            active
            onChange={handleChange}
            value={searchText}
          />
          <SearchIcon active onClick={handleClick} />
          {searchText && (
            <ResultList
              searchText={searchText}
              closeSearchBar={closeSearchBar}
            />
          )}
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
