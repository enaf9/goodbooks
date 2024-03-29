import React, { useState } from "react";

//styled components imports
import StyledArrowIcon from "./StyledArrowIcon";

//components imports
import ReleasesList from "./ReleasesList/index";

const ReleasesInfo = props => {
  const [releaseListOpen, setReleaseListOpen] = useState(false);
  const handleClick = () => {
    setReleaseListOpen(!releaseListOpen);
  };

  return (
    <>
      Vydání
      <StyledArrowIcon
        size="16"
        onClick={handleClick}
        isOpen={releaseListOpen}
      />
      <ReleasesList isOpen={releaseListOpen} id={props.id} />
    </>
  );
};

export default ReleasesInfo;
