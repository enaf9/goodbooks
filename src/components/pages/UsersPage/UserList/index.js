import React from "react";

//styled components imports
import StyledUserList from "./StyledUserList";

//components imports
import UserCard from "../../../UserCard/index";
import UserImage from "../../../../images/Users/beachboy.jpg";

const UserList = () => {
  return (
    <StyledUserList>
      <UserCard name="beachboy123" img={UserImage} />
      <UserCard name="beachboy123" img={UserImage} />
      <UserCard name="beachboy123" img={UserImage} />
      <UserCard name="beachboy123" img={UserImage} />
    </StyledUserList>
  );
};

export default UserList;
