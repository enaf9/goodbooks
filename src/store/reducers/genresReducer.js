const genres = [
  { value: "1", label: "fantasy", name: "genres" },
  { value: "2", label: "romány", name: "genres" },
  { value: "3", label: "sci-fi", name: "genres" },
  { value: "4", label: "detektívní", name: "genres" },
  { value: "5", label: "světová literatura", name: "genres" },
  { value: "6", label: "dívčí romány", name: "genres" },
  { value: "7", label: "pro děti a mládež", name: "genres" }
];

const genresReducer = (state = genres, action) => {
  return state;
};

export default genresReducer;
