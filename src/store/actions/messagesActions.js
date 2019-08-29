import { auth, db } from "../../firebase";

const setSignUpMsg = msg => {
  return { type: "SET_SIGN_UP_MSG", msg };
};
export { setSignUpMsg };
