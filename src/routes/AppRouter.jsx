import { Routes, Route, Navigate } from "react-router-dom";
import { RegisteredRouter, AccessRouter } from "./";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<RegisteredRouter />} />
      <Route path="/*" element={<AccessRouter />} />
    </Routes>
  );
};
