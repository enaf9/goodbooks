import { db } from "./firebase";
const parse = async () => {
  let initName = [];
  let name = [];
  let next = [];
  let keywords = [""];

  const snapshot = await db.collection("users").get();
  await snapshot.docs.map(async doc => {
    initName = await doc.data().username.split(" "); ///initial order
    name = [...initName];
    keywords = [""];

    while (next[0] !== initName[0]) {
      let string;
      next = name;
      string = next.toString().replace(/,/g, " ");
      keywords = [...keywords, ...createKeywords(string.toLowerCase())];
      name.unshift(name.pop());
    }
    await db
      .collection("users")
      .doc(doc.id)
      .update({
        keywords: keywords
      });
    console.log(keywords);
  });
};

const createKeywords = word => {
  let keywords = [];
  let keyword = "";
  word.split("").forEach(char => {
    keyword += char;
    keywords.push(keyword);
  });
  return keywords;
};

export default parse;
