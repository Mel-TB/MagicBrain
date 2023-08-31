import PropTypes from "prop-types";

import { StyledList } from "./ListItem.styles";

const ListItem = ({ children }) => {
  return (
    <div>
      <StyledList>{children}</StyledList>
    </div>
  );
};

ListItem.propTypes = {
  children: PropTypes.node,
};

export default ListItem;
