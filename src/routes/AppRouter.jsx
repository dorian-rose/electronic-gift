import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slice/userSlice/userSlice";
import { RegisteredRouter, AccessRouter } from "./";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
import { NavBar } from "../UI/components/NavBar";

export const AppRouter = () => {
  // const auth = getAuth();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);

        dispatch(setUser({ uid: user.uid }));

        //const { displayName, uid, email, photoURL } = user;
        // dispatch(setUser({ displayName, uid, email, photoURL }));
      } else {
        setIsAuthenticated(false);
        dispatch(setUser({ uid: null }));
      }
    });
  }, [auth]);
  return (
    <>
      <NavBar />
      <Routes>
        {isAuthenticated ? (
          <Route path="/*" element={<RegisteredRouter />} />
        ) : (
          <Route path="/*" element={<AccessRouter />} />
        )}
      </Routes>
    </>
  );
};
