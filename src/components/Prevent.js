import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./useAuth";

export default function PreventLoginPage() {
  const auth = useAuth();

  return auth ?  <Navigate to='/dashboard' /> : <Outlet />;
}