import PropTypes from "prop-types";

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoaderSpinner from "../Components/LoaderSpinner/LoaderSpinner";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LoaderSpinner />;
  }

  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" />;
};

PrivateRouter.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouter;
