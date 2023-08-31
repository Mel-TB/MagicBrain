import PropTypes from "prop-types";

import { Label, StyledForm } from "./Form.styles";

const Form = ({ label, children, orientation }) => {
  return (
    <StyledForm orientation={orientation}>
      {label && <Label htmlFor={label}>{label}</Label>}
      {children}
    </StyledForm>
  );
};

Form.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  orientation: PropTypes.string,
};

export default Form;
