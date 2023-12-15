import { Navigate, Outlet } from "react-router-dom";
import Layout from "./Layout";
import { useCheckAuthStatus } from "../api/user";
import { useContext } from "react";
import { UserContext } from "../context/UserContextProvider";

const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(UserContext);

  // if (status === "pending") {
  //   return <div>Loading...</div>;
  // }

  if (isAuthenticated) {
    return (
      <Layout>
        <Outlet />
      </Layout>
    );
  }

  return <Navigate to="/" replace={true} />;
};

export default ProtectedRoute;
