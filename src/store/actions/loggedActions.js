const signIn = id => {
  return {
    type: "SIGN_IN",
    id
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
