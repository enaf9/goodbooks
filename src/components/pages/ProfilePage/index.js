import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../../../firebase";

//styled components imports
import Wrapper from "./Wrapper";
import StyledProfilePage from "./StyledProfilePage";

//components imports
import UserCard from "../../UserCard/index";
import Tabs from "../../Tabs/index";
import BookSections from "./BookSections";
import ReviewList from "./ReviewList";
import RatingList from "./RatingList";

const ProfilePage = props => {
  let content;
  const currentTab = useSelector(state => state.tabReducer);
  const loggedUser = useSelector(state => state.loggedReducer);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const snapshot = await db
        .collection("users")
        .doc(props.match.params.id ? props.match.params.id : loggedUser.id)
        .get();
      setUser({ ...snapshot.data(), id: snapshot.id });
    };

    getUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.id]);

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
      <UserCard center big image={user.image} name={user.username} />
      <Wrapper>
        <Tabs tabs={tabs} />
        {content}
      </Wrapper>
    </StyledProfilePage>
  );
};

export default ProfilePage;
