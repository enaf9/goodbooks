import React, { useState, useEffect } from "react";
import { db } from "../../firebase";

import { ReactComponent as Loading } from "../../images/loading.svg";

//styled components imports
import StyledAuthorList from "./StyledAuthorList";
import LoadingWrapper from "./LoadingWrapper";

//components imports
import UserCard from "../UserCard/index";

const AuthorList = props => {
  const [authors, setAuthors] = useState([]);
  const [authorsLoaded, setAuthorsLoaded] = useState(false);

  const [queries] = useState({
    asc: db.collection("authors").orderBy("lastName"),
    desc: db.collection("authors").orderBy("lastName", "desc")
  });

  useEffect(() => {
    setAuthorsLoaded(false);
    const getAuthors = async () => {
      const snapshot = await queries[props.order]
        .where("keywords", "array-contains", props.filterText.toLowerCase())
        .get();
      const data = snapshot.docs.map(doc => {
        return { ...doc.data(), id: doc.id };
      });
      setAuthorsLoaded(true);
      setAuthors(data);
    };

    getAuthors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.order, props.filterText]);

  return (
    <StyledAuthorList>
      {authorsLoaded ? (
        authors.map(author => {
          return (
            <UserCard
              key={author.id}
              id={author.id}
              name={author.name}
              image={author.image}
            />
          );
        })
      ) : (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
    </StyledAuthorList>
  );
};

export default AuthorList;
