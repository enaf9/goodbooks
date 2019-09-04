import React, { useState, useEffect } from "react";
import { db } from "../../firebase";

//styled components imports
import StyledAuthorList from "./StyledAuthorList";

//components imports
import UserCard from "../UserCard/index";

const AuthorList = props => {
  const [authors, setAuthors] = useState([]);
  const [queries] = useState({
    asc: db.collection("authors").orderBy("lastName"),
    desc: db.collection("authors").orderBy("lastName", "desc")
  });

  useEffect(() => {
    const getAuthors = async () => {
      const snapshot = await queries[props.order].get();
      const data = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });
      setAuthors(data);
    };

    getAuthors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.order]);

  return (
    <StyledAuthorList>
      {authors.map(author => {
        return (
          <UserCard
            key={author.id}
            id={author.id}
            name={author.name}
            image={author.image}
          />
        );
      })}
    </StyledAuthorList>
  );
};

export default AuthorList;
