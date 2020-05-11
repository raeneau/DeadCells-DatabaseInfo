import React from "react";
import PropTypes from "prop-types";

// -----------------------------------------------------------------------------

function BasicDisplay(props) {
  const { name, value, img } = props;

  if (value === undefined) {
    return null;
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        {value} {img}
      </td>
    </tr>
  );
}

BasicDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  img: PropTypes.node,
};

BasicDisplay.defaultProps = {
  value: undefined,
  img: undefined,
};

// -----------------------------------------------------------------------------

export default BasicDisplay;
