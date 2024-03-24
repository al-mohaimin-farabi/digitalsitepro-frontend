import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const { user, isadmin, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // If authentication state is still loading, render nothing (or a loading spinner)
    return null;
  }

  if (!user?.email) {
    // If user is not logged in, redirect to login
    return <Navigate to="/home" state={{ from: location }} />;
  }
  if (user?.email && !isadmin) {
    // If user is not logged in, redirect to login
    return <Navigate to="/dashboard" state={{ from: location }} />;
  }

  // User is logged in and isAdmin , allow access to children
  return <>{children}</>;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminRoute;
