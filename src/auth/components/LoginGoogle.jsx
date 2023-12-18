import { auth } from "../../config/firebaseConfig";
import google from "../../assets/google.png";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

/**
 * function that returns button, onclick manages firebase login with google
 */
export const LoginGoogle = () => {
  const provider = new GoogleAuthProvider();

  /**
   * Function that calls firebase sign in with pop up and signs in user
   */
  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      //variables for future use:
      const credential = await GoogleAuthProvider.credentialFromResult(result); // This gives you a Google Access Token. You can use it to access the Google API.
      const token = await credential.accessToken;
      const user = result.user;
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    }
  };

  return (
    <button
      className="block m-auto w-12 hover:w-14 mt-4 shadow-md p-2 rounded-full"
      onClick={loginWithGoogle}
    >
      <img className="w-full" src={google} alt="google logo" />
    </button>
  );
};
