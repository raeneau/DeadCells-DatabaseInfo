import React from "react";

// -----------------------------------------------------------------------------

function BasicDisplay(props) {
  const { name, value } = props;

  if (value === undefined) {
    return null;
  }

  return (
    <div>
      {name}: {value !== undefined ? value : "N/A"}
    </div>
  );
}

// -----------------------------------------------------------------------------

export default BasicDisplay;
