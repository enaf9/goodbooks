import React from "react";

import Wrapper from "./Wrapper";
import DeleteIcon from "./DeleteIcon";
import HeartIcon from "../../../../../../../shared-styled-components/HeartIcon";
import BookmarkPlusIcon from "../../../../../../../shared-styled-components/BookmarkPlusIcon";
import BookIcon from "../../../../../../../shared-styled-components/BookIcon";
import CheckIcon from "../../../../../../../shared-styled-components/CheckIcon";

const IconsBar = props => {
  let bar;
  switch (props.section) {
    case "1":
      bar = (
        <>
          <BookmarkPlusIcon />
          <BookIcon />
          <CheckIcon />
          <DeleteIcon size="20" />
        </>
      );
      break;
    case "2":
      bar = (
        <>
          <HeartIcon />
          <BookIcon />
          <CheckIcon />
          <DeleteIcon size="20" />
        </>
      );
      break;
    case "3":
      bar = (
        <>
          <HeartIcon />
          <BookmarkPlusIcon />
          <CheckIcon />
          <DeleteIcon size="20" />
        </>
      );
      break;
    case "4":
      bar = (
        <>
          <HeartIcon />
          <BookmarkPlusIcon />
          <BookIcon />
          <DeleteIcon size="20" />
        </>
      );
      break;
  }
  return <Wrapper>{bar}</Wrapper>;
};

export default IconsBar;
