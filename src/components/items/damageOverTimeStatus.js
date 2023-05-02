import React from "react";
import PropTypes from "prop-types";

// -----------------------------------------------------------------------------

const BasicDisplay = (props) => {
  const { name, damage, duration } = props;

  if (damage === undefined || duration === undefined) {
    return null;
  }

  return (
    <tr>
      <td>{name}</td>
      <td>
        {damage} DPS for {duration} seconds
      </td>
    </tr>
  );
};

BasicDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  damage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BasicDisplay.defaultProps = {
  damage: undefined,
  duration: undefined,
};

// -----------------------------------------------------------------------------

export default BasicDisplay;
