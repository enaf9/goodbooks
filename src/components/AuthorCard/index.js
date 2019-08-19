import React from "react";
import AuthorImage from "../../images/Authors/38550.jpg";

//stlyed components imports
import StyledAuthorCard from "./StyledAuthorCard";
import Image from "./Image";
import Name from "./Name";

const AuthorCard = () => {
  return (
    <StyledAuthorCard>
      <Image src={AuthorImage} />
      <Name>Brandon Sanderson</Name>
    </StyledAuthorCard>
  );
};

export default AuthorCard;
