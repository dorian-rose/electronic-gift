import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AccessForm } from "../components/AccessForm";
import { LoginGoogle } from "../components/LoginGoogle";
// import { FooterSignIn } from "../../ui/FooterSignIn";
//firebase imports
import { auth } from "../../config/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

/**
 * function that returns jsx login options including form and on submit of form manages firebase login with form data
 */
export const LoginPage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState("");

  /**
   * function that takes user data and uses it to enter user in application using firebase sign in with email and password
   * @param {Object} data form field entries from component access form, to which component this function is passed
   */
  const enterUser = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/todo");
    } catch (error) {
      if (
        error.code === "auth/wrong-password" ||
        error.code === "auth/user-not-found"
      ) {
        setErrors("Usuario o contraseña no correcto");
      } else {
        setErrors("Algo no funciona, inténtalo de nuevo");
        console.log("error at sign in in with email and pass", error);
      }
    }
  };

  return (
    <>
      <section className="max-w-2xl m-auto">
        <h1 className="mb-10 mt-20 text-center text-primary text-2xl font-thin ">
          Bienvenido de nuevo!
        </h1>
        <article>
          <AccessForm enterUser={enterUser} nameHidden={true} />
          <p className="text-alert text-sm font-thin text-center mt-4">
            {errors}
          </p>
        </article>
        <article className="mx-4 mt-20 border-t border-slate">
          <p className="relative -top-3 left-1/2 -translate-x-1/2 bg-tertiary w-fit px-2 text-sm text-lines ">
            Login con
          </p>
          <LoginGoogle />
          <p className="mt-10 text-sm text-lines text-center font-thin">
            Aún no tienes una cuenta?{" "}
            <Link
              to="/register"
              className="ms-1 font-bold hover:text-secondary hover:underline"
            >
              Regístrate
            </Link>
          </p>
        </article>
        {/* <FooterSignIn /> */}
      </section>
    </>
  );
};
