const booksReducer = (
  state = [
    {
      id: 1,
      title: "Cesta králů",
      author: "Brandon Sanderson",
      coverImage:
        "https://www.databazeknih.cz/images_books/11_/114615/big_archiv-bourne-zare-cesta-kralu-iRU-114615.jpg"
    },
    {
      id: 2,
      title: "Meč přísahy",
      author: "Brandon Sanderson",
      coverImage:
        "https://www.databazeknih.cz/images_books/41_/414497/bmid_mec-prisahy-6xj-414497.jpg"
    }
  ],
  action
) => {
  return state;
};

export default booksReducer;
