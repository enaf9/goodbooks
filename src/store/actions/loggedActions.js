const signIn = () => {
  return {
    type: "SIGN_IN"
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
