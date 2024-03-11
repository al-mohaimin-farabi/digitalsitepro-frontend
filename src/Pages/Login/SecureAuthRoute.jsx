import { useLocation, Navigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import PropTypes from "prop-types";

const SecureAuthRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading && !user?.email) return <>{children}</>;
  if (!user.emailVerified) return <>{children}</>;

  if (user?.email && user?.emailVerified)
    return <Navigate to="/" state={{ from: location }} />;
  return children;
};

SecureAuthRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SecureAuthRoute;
