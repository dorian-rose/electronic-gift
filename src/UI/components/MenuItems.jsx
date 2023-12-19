import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Logout } from "../../auth/components/Logout";

export const MenuItems = ({ openCloseModal }) => {
  const [displaySearch, setDisplaySearch] = useState(false);

  //collect user id
  const { uid } = useSelector((state) => state.user);
  console.log(uid);
  return (
    <>
      <div className="md:ps-24 pt-20 pb-28 md:py-5 flex me-5 md:me-0 justify-end md:justify-start">
        <ul className="flex flex-col md:flex-row  w-fit ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `md:mx-5 text-lg ${isActive ? "text-primary " : ""} `
              }
            >
              Home
            </NavLink>
          </li>
          {uid ? (
            <>
              <li className="md:mx-5 text-lg">
                <button onClick={openCloseModal}>Crear</button>
              </li>
              <li className="md:mx-5 text-lg">
                <button onClick={() => setDisplaySearch(!displaySearch)}>
                  Buscar
                </button>{" "}
              </li>
              <li className="md:mx-5 text-lg">
                <Logout />
              </li>
            </>
          ) : (
            <li className="md:mx-5 text-lg">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `md:mx-5 text-lg ${isActive ? "text-primary " : ""} `
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      {/* temporary Search message */}
      <div
        className={`absolute z-10 bg-slate-200 p-2 rounded-xl top-14 left-60 ${
          !displaySearch && "hidden"
        }`}
      >
        <button
          onClick={() => setDisplaySearch(!displaySearch)}
          className="text-red-500 relative left-2"
        >
          X
        </button>
        <p>Search function not yet active</p>
      </div>
      {/* end temporary search message */}
    </>
  );
};
