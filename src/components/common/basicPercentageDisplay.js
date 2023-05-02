import React from "react";
import PropTypes from "prop-types";

// -----------------------------------------------------------------------------

const BasicPercentageDisplay = (props) => {
  const { name, value, defaultValue, requiredType, actualType } = props;

  if (
    (value === undefined && defaultValue === undefined) ||
    requiredType !== actualType
  ) {
    return null;
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{(value || defaultValue) * 100}%</td>
    </tr>
  );
};

BasicPercentageDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  requiredType: PropTypes.string,
  actualType: PropTypes.string,
};

BasicPercentageDisplay.defaultProps = {
  value: undefined,
  defaultValue: undefined,
  requiredType: undefined,
  actualType: undefined,
};

// -----------------------------------------------------------------------------

export default BasicPercentageDisplay;
