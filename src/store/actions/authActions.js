import { auth, db } from "../../firebase";

const signUp = user => {
  return async (dispatch, getState) => {
    try {
      let cred = await auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );

      console.log(cred.user);

      await db
        .collection("users")
        .doc(cred.user.uid)
        .set({ username: user.username });

      dispatch({ type: "SIGN_UP_SUCCESS", user });
    } catch (error) {
      dispatch({ type: "SIGN_UP_FAILURE", error });
    }
  };
};

const signIn = user => {
  return async (dispatch, getState) => {
    try {
      await auth.signInUserWithEmailAndPassword(user.email, user.password);

      dispatch({ type: "SIGN_IN_SUCCESS", user });
    } catch (error) {
      dispatch({ type: "SIGN_IN_FAILURE", error });
    }
  };
};

export { signUp, signIn };
