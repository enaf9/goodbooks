import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import toggleUserMenuItem from "../../../store/actions/userMenuItemActions";

//styled components imports
import Wrapper from "./Wrapper";
import Input from "./Input";
import SearchIcon from "./SearchIcon";

const SearchBar = () => {
  const [active, setActive] = useState(false);
  const isUserMenuItemHidden = useSelector(state => state.userMenuItemReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    setActive(!active);
    if (isUserMenuItemHidden) {
      setTimeout(() => {
        dispatch(toggleUserMenuItem());
      }, 710);
    } else {
      dispatch(toggleUserMenuItem());
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
