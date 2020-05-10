import React from "react";

// -----------------------------------------------------------------------------

function BasicPercentageDisplay(props) {
  const { name, value, defaultValue } = props;

  if (value === undefined && defaultValue === undefined) {
    return null;
  }

  return (
    <div>
      {name}: {(value || defaultValue) * 100}%
    </div>
  );
}

// -----------------------------------------------------------------------------

export default BasicPercentageDisplay;
