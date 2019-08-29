import { auth, db } from "../../firebase";

const signUp = user => {
  return async (dispatch, getState) => {
    try {
      let cred = await auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );

      await db
        .collection("users")
        .doc(cred.user.uid)
        .set({ username: user.username });

      const success = "Uživatel byl úspěšně zaregistrován.";

      dispatch({ type: "SIGN_UP_SUCCESS", success });
    } catch (error) {
      dispatch({ type: "SIGN_UP_FAILURE", error });
    }
  };
};

const signIn = user => {
  return async (dispatch, getState) => {
    try {
      await auth.signInUserWithEmailAndPassword(user.email, user.password);
      const success = "Uživatel byl úspěšně zaregistrován.";

      dispatch({ type: "SIGN_IN_SUCCESS", success });
    } catch (error) {
      dispatch({ type: "SIGN_IN_FAILURE", error });
    }
  };
};

export { signUp, signIn };
