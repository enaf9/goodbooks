import React from "react";

//styled components imports
import Title from "./Title";
import InfoText from "./InfoText";

const Release = props => {
  console.log(props);
  return (
    <>
      <Title>{props.data.title}</Title>
      <InfoText>
        {props.data.releaseDate.toDate().getFullYear()}, {props.data.publisher}
        {props.data.type ? " (" + props.data.type + ")" : ""}
      </InfoText>
      <InfoText>{props.data.isbn}</InfoText>
    </>
  );
};

export default Release;
