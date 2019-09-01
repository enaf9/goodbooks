const genres = [
  { value: "1", label: "fantasy", name: "genres" },
  { value: "2", label: "romány", name: "genres" },
  { value: "3", label: "sci-fi", name: "genres" },
  { value: "4", label: "detektívní", name: "genres" }
];

const genresReducer = (state = genres, action) => {
  return state;
};

export default genresReducer;
