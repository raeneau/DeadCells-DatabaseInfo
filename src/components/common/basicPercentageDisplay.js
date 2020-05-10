import React from "react";

// -----------------------------------------------------------------------------

function BasicPercentageDisplay(props) {
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
}

// -----------------------------------------------------------------------------

export default BasicPercentageDisplay;
