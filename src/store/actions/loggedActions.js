const signIn = (id, image, username) => {
  return {
    type: "SIGN_IN",
    id,
    image,
    username
  };
};

const signOut = () => {
  return {
    type: "SIGN_OUT"
  };
};

const setStatus = () => {
  return {
    type: "SET_STATUS"
  };
};

export { signIn, signOut, setStatus };
