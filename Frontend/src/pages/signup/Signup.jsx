import PropTypes from "prop-types";

import SignupForm from "../../features/authentication/SignupForm";

const Signup = ({ onRouteChange, loadUser }) => {
  return (
    <SignupForm
      onRouteChange={onRouteChange}
      loadUser={loadUser}
    />
  );
};

Signup.propTypes = {
  loadUser: PropTypes.func,
  onRouteChange: PropTypes.func,
};
export default Signup;
