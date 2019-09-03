import React, { useState, useEffect } from "react";

//styled components imports
import StyledBooksPage from "./StyledBooksPage";
import Title from "./Title";
import Wrapper from "./Wrapper";
import Filter from "./Filter";
import FilterIcon from "./FilterIcon";
import LoadingWrapper from "./LoadingWrapper";
import ButtonWrapper from "./ButtonWrapper";
import ShowMoreButton from "./ShowMoreButton";

//components imports
import SearchInput from "../../SearchInput/index";
import SelectInput from "../../SelectInput/index";
import BookList from "../../BookList/index";
import FilterForm from "./FilterForm/index";

import { db } from "../../../firebase";

import { ReactComponent as Loading } from "../../../images/loading.svg";

const BooksPage = props => {
  const [filterIsOpen, setFilterOpen] = useState(false);
  const [queries] = useState({
    newest: db.collection("books").orderBy("release.releaseDate", "desc"),
    oldest: db.collection("books").orderBy("release.releaseDate"),
    name: db.collection("books").orderBy("title"),
    bestRating: db.collection("books").orderBy("avgRating", "desc"),
    worstRating: db.collection("books").orderBy("avgRating")
  });
  const [selectedOption, setSelectedOption] = useState("newest");
  const [lastDoc, setLastDoc] = useState(null);
  const [books, setBooks] = useState([]);
  const [booksLoaded, setBooksLoaded] = useState(false);

  const getBooks = async () => {
    const snapshot = await queries[selectedOption].limit(12).get();
    setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    const data = snapshot.docs.map(doc => {
      return doc.data();
    });
    setBooks([...data]);
    setBooksLoaded(true);
  };

  const getNextBooks = async () => {
    console.log(lastDoc);
    console.log(123);
    const snapshot = await queries[selectedOption]
      .startAfter(lastDoc)
      .limit(12)
      .get();
    setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    const data = snapshot.docs.map(doc => {
      return doc.data();
    });
    setBooks([...books, ...data]);
    setBooksLoaded(true);
  };

  useEffect(() => {
    setBooksLoaded(false);
    getBooks();
  }, [selectedOption]);

  const optionValues = [
    { value: "newest", label: "Nejnovějších" },
    { value: "oldest", label: "Nejstarších" },
    { value: "name", label: "Názvu" },
    { value: "bestRating", label: "Nejlepší hodnocení" },
    { value: "worstRating", label: "Nejhorší hodnocení" }
  ];

  const handleClick = () => {
    setFilterOpen(!filterIsOpen);
  };

  const optionChange = e => {
    console.log(e.value);
    setSelectedOption(e.value);
  };

  return (
    <StyledBooksPage>
      <Title>Knihy</Title>
      <Wrapper>
        <SearchInput />
        <Filter>
          <SelectInput
            options={optionValues}
            defaultValue={optionValues[0]}
            setValue={optionChange}
          />
          <FilterIcon size="24" onClick={handleClick} />
        </Filter>
        <FilterForm isOpen={filterIsOpen} />
      </Wrapper>
      {booksLoaded ? (
        <>
          <BookList books={books} />
          <ButtonWrapper>
            <ShowMoreButton>ZOBRAZIT DALŠÍ</ShowMoreButton>
          </ButtonWrapper>
        </>
      ) : (
        <LoadingWrapper>
          <Loading />
        </LoadingWrapper>
      )}
    </StyledBooksPage>
  );
};

export default BooksPage;
