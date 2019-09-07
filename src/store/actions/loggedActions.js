const signIn = (id, data) => {
  return {
    type: "SIGN_IN",
    id,
    data
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
