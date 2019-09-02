import React, { useState } from "react";

//styled components imports
import StyledArrowIcon from "./StyledArrowIcon";
import Wrapper from "./Wrapper";
import SeriesName from "./SeriesName";

//components imports
import SeriesList from "./SeriesList/index";

const Series = props => {
  const [seriesListOpen, setSeriesListOpen] = useState(false);
  const handleClick = () => {
    setSeriesListOpen(!seriesListOpen);
  };
  return (
    <Wrapper>
      <SeriesName>
        {props.title}
        <StyledArrowIcon
          size="16"
          onClick={handleClick}
          isOpen={seriesListOpen}
        />
      </SeriesName>
      <SeriesList isOpen={seriesListOpen} id={props.id} />
    </Wrapper>
  );
};

export default Series;
