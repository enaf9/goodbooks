import { auth, db } from "../../firebase";

const signUp = (email, password) => {
  return (dispatch, getState) => {
    console.log("TESSSST");
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
      console.log(cred.user);
      dispatch({ type: "SIGN_UP", user: cred.user });
    });
  };
};

export { signUp };
