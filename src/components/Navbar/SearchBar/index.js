import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import toggleSearchBar from "../../../store/actions/menuSearchBarActions";

//styled components imports
import Wrapper from "./Wrapper";
import Input from "./Input";
import SearchIcon from "./SearchIcon";

const SearchBar = props => {
  const [active, setActive] = useState(false);
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
