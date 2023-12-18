import { NavLink } from "react-router-dom";

import { useState } from "react";
import { Logout } from "../../auth/components/Logout";

export const MenuItems = ({ openCloseModal }) => {
  const [displaySearch, setDisplaySearch] = useState(false);
  return (
    <>
      <nav className="md: ps-20 pt-20 pb-28 md:py-5 flex justify-end md:justify-start">
        <ul className="flex flex-col md:flex-row  w-fit">
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

          <li className="md:mx-5 text-lg">
            <button onClick={openCloseModal}>Crear nuevo</button>
          </li>
          <li className="md:mx-5 text-lg">
            <button onClick={() => setDisplaySearch(!displaySearch)}>
              Buscar
            </button>{" "}
          </li>
          <li className="md:mx-5 text-lg">
            <Logout />
          </li>
        </ul>
      </nav>
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
