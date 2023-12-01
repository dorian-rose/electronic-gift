import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage, DetailPage } from "../registeredFunctions/pages";
import { GiftPage } from "../accessFunctions/pages/GiftPage";

export const RegisteredRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/gift/:id" element={<GiftPage />} />
      <Route path="/view/:id" element={<GiftPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
