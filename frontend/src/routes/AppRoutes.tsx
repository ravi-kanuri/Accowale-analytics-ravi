import { Routes, Route } from "react-router-dom";

import FeedbackPage from "../pages/FeedbackPage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import ProtectedRoute from "../components/ProtectedRoute";
import FeedbackManagementPage from "../pages/FeedbackManagementPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FeedbackPage />} />

      <Route path="/admin/login" element={<LoginPage />} />

      <Route
        path="/admin/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route
  path="/admin/feedback"
  element={
    <ProtectedRoute>
      <FeedbackManagementPage />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}