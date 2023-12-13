import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "../registeredFunctions/pages";
import { GiftPage } from "../UI/pages";

export const RegisteredRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/view/:id" element={<GiftPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
