import React, { useState, useEffect } from "react";
import { db } from "../../firebase";

//styled components imports
import StyledUserList from "./StyledUserList";

//components imports
import UserCard from "../UserCard/index";

const UserList = props => {
  const [users, setUsers] = useState([]);
  const [queries] = useState({
    asc: db.collection("users").orderBy("username"),
    desc: db.collection("users").orderBy("username", "desc"),
    views: db.collection("users")
  });

  useEffect(() => {
    const getUsers = async () => {
      const snapshot = await queries[props.order].get();
      const data = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });
      setUsers(data);
    };

    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.order]);

  return (
    <StyledUserList>
      {users.map(user => (
        <UserCard name={user.username} image={user.image} />
      ))}
    </StyledUserList>
  );
};

export default UserList;
