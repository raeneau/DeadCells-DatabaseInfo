import React from "react";

// -----------------------------------------------------------------------------

function ArrayDisplay(props) {
  const { name, array, objectKey } = props;

  // If there is no data, just return nothing
  if (array === undefined || array.length === 0) {
    return null;
  }

  const message = array.reduce((accumulator, element, index) => {
    const attackNumber = index + 1;
    const desiredData = element[objectKey];

    // TODO: Make work with multiple values here
    if (typeof desiredData === "object" && desiredData.length > 1) {
      return accumulator;
    }

    return accumulator + `${attackNumber > 1 ? ` /` : ""} ${desiredData}`;
  }, "");

  return (
    <tr>
      <td>{name}</td>
      <td>{message}</td>
    </tr>
  );
}

// -----------------------------------------------------------------------------

export default ArrayDisplay;
