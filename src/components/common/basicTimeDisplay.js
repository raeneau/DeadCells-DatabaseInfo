import React from "react";
import PropTypes from "prop-types";

// -----------------------------------------------------------------------------

const BasicTimeDisplay = (props) => {
  const { name, value, img } = props;

  if (value === undefined) {
    return null;
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        {value} seconds {img}
      </td>
    </tr>
  );
};

BasicTimeDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  img: PropTypes.node,
};

BasicTimeDisplay.defaultProps = {
  value: undefined,
  img: undefined,
};

// -----------------------------------------------------------------------------

export default BasicTimeDisplay;
