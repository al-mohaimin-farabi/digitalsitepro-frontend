import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import PropTypes from "prop-types";

const SecureRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // If authentication state is still loading, render nothing (or a loading spinner)
    return null;
  }

  if (!user?.email || !user?.emailVerified) {
    // If user is not logged in, redirect to login
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // User is logged in and email is verified, allow access to children
  return <>{children}</>;
};

SecureRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SecureRoute;
