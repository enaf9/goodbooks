import React from "react";

//styled components imports
import StyledBanner from "./StyledBanner";
import Text from "./Text";
import SignInForm from "./SignInForm/index";

//components imports

const Banner = () => {
  return (
    <StyledBanner>
      <Text>
        Objevuj nové knihy, přidávej hodnocení a spravuj si svoji knihovnu
      </Text>
      <SignInForm />
    </StyledBanner>
  );
};

export default Banner;
