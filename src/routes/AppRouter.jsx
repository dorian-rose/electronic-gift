import { Routes, Route, Navigate } from "react-router-dom";
import { RegisteredRouter, AccessRouter } from "./";

export const AppRouter = () => {
  const isAuthenticated = false;
  return (
    <Routes>
      {isAuthenticated ? (
        <Route path="/*" element={<RegisteredRouter />} />
      ) : (
        <Route path="/*" element={<AccessRouter />} />
      )}
    </Routes>
  );
};
