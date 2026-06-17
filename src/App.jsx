import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./hooks/AuthProvider";
import { useAuth } from "./hooks/useAuth";

import { Toaster } from "sonner";

import TasksPage from "./pages/TasksPage";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Toaster
        toastOptions={{
          style: {
            background: "var(--bg-card)",
            color: "var(--text-primary)",
            border: "1px solid var(--border)",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/tasks"
            element={
              <ProtectedRoute>
                <TasksPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
