import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "../accessFunctions/pages";
import { GiftPage } from "../UI/pages";
import { LoginPage, RegisterPage } from "../auth/pages";

export const AccessRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gift/:id" element={<GiftPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
