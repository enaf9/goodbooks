import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

//styled components imports
import StyledAuthorPage from "./StyledAuthorPage";
import Wrapper from "./Wrapper";
import Biography from "./Biography";

//components imports
import UserCard from "../../UserCard/index";
import Tabs from "../../Tabs/index";
import BookList from "../../BookList";
import Series from "./Series";

import { db } from "../../../firebase";

const AuthorPage = props => {
  let content;
  const currentTab = useSelector(state => state.tabReducer);
  const [author, setAuthor] = useState({});
  const [authorSnapshot, setAuthorSnapshot] = useState({});
  const [series, setSeries] = useState([]);
  const [authorLoaded, setAuthorLoaded] = useState(false);
  const [seriesLoaded, setSeriesLoaded] = useState(false);

  useEffect(() => {
    const getAuthor = async () => {
      const snapshot = await db
        .collection("authors")
        .doc(props.match.params.id)
        .get();
      setAuthorSnapshot(snapshot);
      setAuthor(snapshot.data());
      setAuthorLoaded(true);
    };

    const getSeries = async () => {
      const snapshot = await db
        .collection("authors")
        .doc(props.match.params.id)
        .collection("series")
        .get();
      const data = snapshot.docs.map(doc => {
        return doc;
      });
      setSeries(data);
      setSeriesLoaded(true);
    };
    getAuthor();
    getSeries();
  }, [props.match.params.id]);

  const tabs = ["Životopis", "Knihy", "Série"];

  switch (currentTab) {
    case 0:
      content = <Biography>{author.bio}</Biography>;
      break;
    case 1:
      content = <BookList authorId={authorSnapshot.id} size="big" />;
      break;
    case 2:
      content = (
        <>
          {series.map(item => {
            return (
              <Series
                title={item.data().title}
                id={item.id}
                key={item.id}
              ></Series>
            );
          })}
        </>
      );
      break;
    default:
      content = <Biography>{author.bio}</Biography>;
      break;
  }
  return (
    <>
      {authorLoaded ? (
        <StyledAuthorPage>
          <UserCard center big img={author.image} name={author.name} />
          <Wrapper>
            <Tabs tabs={tabs} />
            {seriesLoaded ? <>{content}</> : null}
          </Wrapper>
        </StyledAuthorPage>
      ) : null}
    </>
  );
};

export default AuthorPage;
