import React from "react";

//stlyed components imports
import StyledAuthorItem from "./StyledAuthorItem";
import Image from "./Image";
import Name from "./Name";

const AuthorItem = () => {
  return (
    <StyledAuthorItem>
      <Image src="https://images.gr-assets.com/authors/1394044556p5/38550.jpg" />
      <Name>Brandon Sanderson</Name>
    </StyledAuthorItem>
  );
};

export default AuthorItem;
