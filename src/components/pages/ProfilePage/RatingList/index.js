import React, { useState, useEffect } from "react";
import { db } from "../../../../firebase";

//styled components imports
import SelectInput from "../../../SelectInput/index";
import Wrapper from "./Wrapper";
import Content from "./Content";

//components imports
import RatingCard from "../../../RatingCard";

const RatingList = props => {
  const [ratings, setRatings] = useState([]);
  const optionValues = [
    { value: "mostUsefull", label: "Nejužitečnejší" },
    { value: "newest", label: "Nejnovějších" },
    { value: "oldest", label: "Nejstarších" }
  ];
  useEffect(() => {
    const getRatings = async () => {
      let ratingsList = [];
      const snapshot = await db
        .collection("users")
        .doc(props.userId)
        .collection("ratings")
        .get();
      snapshot.docs.map(doc => {
        ratingsList.push({ ...doc.data(), id: doc.id });
      });
      setRatings(ratingsList);
    };
    if (props.userId) {
      getRatings();
    }
  }, [props.userId]);

  return (
    <>
      <Wrapper>
        <SelectInput options={optionValues} defaultValue={optionValues[0]} />
      </Wrapper>
      <Content>
        {ratings.map(rating => (
          <RatingCard
            id={rating.id}
            image={rating.coverImage}
            author={rating.author}
            title={rating.bookTitle}
            rating={rating.rating}
          />
        ))}
      </Content>
    </>
  );
};

export default RatingList;
