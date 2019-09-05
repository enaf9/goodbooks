import React, { useState, useEffect } from "react";
import { db } from "../../firebase";

import { ReactComponent as Loading } from "../../images/loading.svg";

//styled components imports
import StyledUserList from "./StyledUserList";
import LoadingWrapper from "./LoadingWrapper";

//components imports
import UserCard from "../UserCard/index";

const UserList = props => {
  const [users, setUsers] = useState([]);
  const [usersLoaded, setUsersLoaded] = useState(false);

  const [queries] = useState({
    asc: db.collection("users").orderBy("usernameLowercase"),
    desc: db.collection("users").orderBy("usernameLowercase", "desc")
  });

  useEffect(() => {
    setUsersLoaded(false);
    const getUsers = async () => {
      const snapshot = await queries[props.order]
        .where("keywords", "array-contains", props.filterText.toLowerCase())
        .get();
      const data = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });
      setUsersLoaded(true);
      setUsers(data);
    };

    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.order, props.filterText]);

  return (
    <StyledUserList>
      {usersLoaded ? (
        users.map(user => (
          <UserCard
            key={user.id}
            name={user.username}
            image={user.image}
            id={user.id}
            type="users"
          />
        ))
      ) : (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
    </StyledUserList>
  );
};

export default UserList;
