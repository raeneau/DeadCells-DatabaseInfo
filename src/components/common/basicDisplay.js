import React from "react";
import PropTypes from "prop-types";

// -----------------------------------------------------------------------------

function BasicDisplay(props) {
  const { name, value } = props;

  if (value === undefined) {
    return null;
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  );
}

BasicDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BasicDisplay.defaultProps = {
  value: undefined,
};

// -----------------------------------------------------------------------------

export default BasicDisplay;
