import { Routes, Route, Navigate } from "react-router-dom";

export const AccessRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/gift/:id" element={<GiftPage />} />

      <Route path="/*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};
