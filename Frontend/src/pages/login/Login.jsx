import PropTypes from "prop-types";

import LoginForm from "../../features/authentication/LoginForm";

const Login = ({ loadUser, onRouteChange }) => {
  return (
    <>
      <LoginForm
        loadUser={loadUser}
        onRouteChange={onRouteChange}
      />
    </>
  );
};

Login.propTypes = {
  loadUser: PropTypes.func,
  onRouteChange: PropTypes.func,
};

export default Login;
