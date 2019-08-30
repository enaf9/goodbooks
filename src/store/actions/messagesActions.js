import { auth, db } from "../../firebase";

const setSignUpMsg = msg => {
  return { type: "SET_SIGN_UP_MSG", msg };
};
const setSignInMsg = msg => {
  return { type: "SET_SIGN_IN_MSG", msg };
};
const resetMsg = () => {
  return { type: "RESET_MSG" };
};

export { setSignUpMsg, setSignInMsg, resetMsg };
