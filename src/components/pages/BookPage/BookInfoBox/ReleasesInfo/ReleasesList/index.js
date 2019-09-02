import React, { useEffect, useState } from "react";
import { db } from "../../../../../../firebase";

//styled components imports
import Line from "./Line";
import StyledList from "./StyledList";

//components imports
import Release from "./Release/index";

const ReleasesList = props => {
  const [releases, setReleases] = useState([]);
  useEffect(() => {
    const getReleases = async () => {
      const snapshot = await db
        .collection("books")
        .doc(props.id)
        .collection("releases")
        .get();
      setReleases(snapshot.docs.map(doc => doc.data()));
    };
    getReleases();
  }, []);

  const renderReleases = () =>
    releases.length ? (
      releases.map(release => (
        <>
          <Release data={release} />
          <Line />
        </>
      ))
    ) : (
      <small>Žádna další vydání.</small>
    );
  return <StyledList isOpen={props.isOpen}>{renderReleases()}</StyledList>;
};

export default ReleasesList;
