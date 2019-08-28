import React from "react";
import { useSelector } from "react-redux";

import AuthorImage from "../../../images/Users/beachboy.jpg";

//styled components imports
import Wrapper from "./Wrapper";
import StyledProfilePage from "./StyledProfilePage";

//components imports
import UserCard from "../../UserCard/index";
import Tabs from "../../Tabs/index";
import BookSections from "./BookSections";
import ReviewList from "./ReviewList";
import RatingList from "./RatingList";

const ProfilePage = () => {
  let content;
  const currentTab = useSelector(state => state.tabReducer);
  const tabs = ["Knihy", "Recenze", "Hodnocení"];
  switch (currentTab) {
    case 0:
      content = <BookSections />;
      break;
    case 1:
      content = <ReviewList />;
      break;
    case 2:
      content = <RatingList />;
      break;
    default:
      content = <BookSections />;
      break;
  }
  return (
    <StyledProfilePage>
      <UserCard center big img={AuthorImage} name="beachboy32" />
      <Wrapper>
        <Tabs tabs={tabs} />
        {content}
      </Wrapper>
    </StyledProfilePage>
  );
};

export default ProfilePage;
