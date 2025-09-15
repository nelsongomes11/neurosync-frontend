import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import type { JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <div role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  if (!user) return <Navigate to="/login" />;

  return children;
};

export default ProtectedRoute;
