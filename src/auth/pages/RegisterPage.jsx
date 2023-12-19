import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AccessForm } from "../components/AccessForm";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { setUser } from "../../store/slice/user/userSlice";
// import { FooterSignIn } from "../../ui/FooterSignIn";
import { LoginGoogle } from "../components/LoginGoogle";
//firebase imports
import { auth } from "../../config/firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

/**
 * function that returns jsx sign up/register options including form and on submit of form manages firebase registration with form data
 */
export const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  /**
   * function that takes user data and uses it to enter user in application using firebase create user with email and password
   * @param {Object} data form field entries from component access form, to which component this function is passed
   */
  const enterUser = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      //set name to firebase profile -either from name field or adapted from email in its defect
      if (data.name) {
        await updateProfile(auth.currentUser, { displayName: data.name });
      } else {
        const nameArray = data.email.split("@");
        const newName = nameArray[0];
        const displayName = newName;
        // dispatch(setUser({ displayName }));
        await updateProfile(auth.currentUser, { displayName });
      }
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrors("Este email ya tiene cuenta");
      } else if (error.code === "auth/invalid-email") {
        setErrors("Email no válido");
      } else if (error.code === "auth/weak-password") {
        setErrors("Contraseña no es segura");
      } else if (error.code) {
        setErrors("Algo no funciona. Inténtalo luego");
      }
    }
  };

  return (
    <>
      <section className="max-w-2xl m-auto">
        <h1 className="mb-6 mt-20 text-center text-primary text-2xl font-thin ">
          Bienvenido!
        </h1>
        <article>
          <AccessForm enterUser={enterUser} nameHidden={false} />
        </article>
        <p className="text-alert text-sm font-thin text-center mt-4">
          {errors}
        </p>
        <article className="mx-4 mt-10 border-t border-slate">
          <p className="relative -top-3 left-1/2 -translate-x-1/2 bg-tertiary w-fit px-2 text-sm text-lines ">
            Regístrate con
          </p>
          <LoginGoogle />
          <p className="mt-10 text-sm text-center text-lines font-thin">
            Ya tienes una cuenta?
            <Link
              to="/login"
              className="ms-1 font-bold hover:text-secondary hover:underline"
            >
              Login
            </Link>
          </p>
        </article>
        {/* <FooterSignIn /> */}
      </section>
    </>
  );
};
