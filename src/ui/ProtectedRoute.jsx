import { useNavigate } from "react-router-dom";
import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";

export default function ProtectedRoute({ children }) {
  const { isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  if (!isLoading && !isAuthenticated) {
    navigate("/login");
  }

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return children;
}
