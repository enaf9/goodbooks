import React from "react";

//styled components imports
import StyledBanner from "./StyledBanner";
import Text from "./Text";
import Wrapper from "./Wrapper";

//components imports
import SignInForm from "./SignInForm/index";

const Banner = () => {
  return (
    <StyledBanner>
      <Wrapper>
        <Text>
          Objevuj nové knihy, přidávej hodnocení a spravuj si svoji knihovnu
        </Text>
        <SignInForm />
      </Wrapper>
    </StyledBanner>
  );
};

export default Banner;
