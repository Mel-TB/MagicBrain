import PropTypes from "prop-types";
import Logo from "../logo/Logo";
import { StyledNav, NavSign } from "./Nav.styles";

const Nav = ({ onRouteChange, isLogin }) => {
  if (isLogin) {
    return (
      <StyledNav>
        <Logo />
        <p onClick={() => onRouteChange("signout")}>Log out</p>
      </StyledNav>
    );
  } else {
    return (
      <NavSign>
        <p onClick={() => onRouteChange("signin")}>Login</p>
        <p onClick={() => onRouteChange("register")}>Signup</p>
      </NavSign>
    );
  }
};

Nav.propTypes = {
  onRouteChange: PropTypes.func,
  isLogin: PropTypes.bool,
};
export default Nav;
