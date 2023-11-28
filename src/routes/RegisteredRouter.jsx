import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "../registeredFunctions/pages";

export const RegisteredRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />

      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
