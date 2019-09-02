import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getSeries, resetSeries } from "../../../store/actions/seriesActions";
import { addBook } from "../../../store/actions/booksActions";

import SelectInput from "../../SelectInput";

//styled components imports
import Wrapper from "./Wrapper";
import InputField from "../../../shared-styled-components/InputField";
import StyledTextArea from "./StyledTextArea";
import Button from "../../../shared-styled-components/Button";

const AdminPage = () => {
  const dispatch = useDispatch();
  const genresOptions = useSelector(state => state.genresReducer);
  const seriesOptions = useSelector(state => state.seriesReducer);

  const [loadSelectOptions, setLoadSelectOptions] = useState(false);
  const [book, setBook] = useState({
    author: "",
    image: "",
    title: "",
    isbn: "",
    originalTitle: "",
    releaseDate: "",
    publisher: "",
    genres: "",
    series: "",
    sequence: "",
    translator: "",
    pages: "",
    description: ""
  });

  const handleChange = e => {
    // console.log(e.targetname);
    if (e.target.name === "author") {
      dispatch(resetSeries());
      setLoadSelectOptions(false);
      setBook({
        ...book,
        [e.target.name]: e.target.value,
        series: ""
      });
    }

    setBook({
      ...book,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = option => {
    Array.isArray(option)
      ? option.map(value =>
          setBook({
            ...book,
            [value.name]: [...book[value.name], value.label]
          })
        )
      : setBook({
          ...book,
          [option.name]: { id: option.value, title: option.label }
        });
  };

  const handleSelectClick = async () => {
    if (book.author && !loadSelectOptions) {
      await dispatch(getSeries(book.author));
      setLoadSelectOptions(true);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addBook(book));
  };

  return (
    <>
      <h3>Přidat knihu</h3>
      <Wrapper onSubmit={handleSubmit}>
        <InputField
          type="text"
          name="author"
          placeholder="Jméno autora"
          value={book.author}
          onChange={handleChange}
          required
        />
        <InputField
          type="text"
          name="title"
          placeholder="Název knihy"
          value={book.title}
          onChange={handleChange}
          required
        />
        <InputField
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={book.isbn}
          onChange={handleChange}
          required
        />
        <InputField
          type="text"
          name="originalTitle"
          placeholder="Originální název"
          value={book.originalTitle}
          onChange={handleChange}
          required
        />
        <InputField
          type="date"
          name="releaseDate"
          placeholder="Datum vydání"
          value={book.releaseDate}
          onChange={handleChange}
          required
        />
        <InputField
          type="text"
          name="publisher"
          placeholder="Vydavatelství"
          value={book.publisher}
          onChange={handleChange}
          required
        />
        <SelectInput
          isMulti
          type="text"
          name="genres"
          placeholder="Žánr"
          options={genresOptions}
          value={book.genres}
          setValue={handleSelectChange}
          required
        />
        <SelectInput
          type="text"
          name="series"
          options={seriesOptions}
          placeholder="Série"
          value={book.series}
          setValue={handleSelectChange}
          loadValues={handleSelectClick}
        />
        <InputField
          type="number"
          name="sequence"
          placeholder="Díl série"
          value={book.sequence}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="translator"
          placeholder="Překladatel"
          value={book.translator}
          onChange={handleChange}
        />
        <InputField
          type="number"
          name="pages"
          placeholder="Počet strán"
          value={book.pages}
          onChange={handleChange}
          required
        />
        <StyledTextArea
          placeholder="Popis knihy"
          name="description"
          value={book.description}
          onChange={handleChange}
          required
        />
        <input type="file" onChange={handleChange} name="image" />
        <Button>Přidat</Button>
      </Wrapper>
    </>
  );
};

export default AdminPage;
