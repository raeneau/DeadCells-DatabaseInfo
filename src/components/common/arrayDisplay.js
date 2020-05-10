import React from "react";

// -----------------------------------------------------------------------------

function ArrayDisplay(props) {
  const { name, array, objectKey } = props;

  // If there are no tags, let the user know
  if (array === undefined || array.length === 0) {
    return <div>{name}: N/A</div>;
  }

  const message = array.reduce(function (accumulator, element, index) {
    const attackNumber = index + 1;
    const desiredData = element[objectKey];

    // TODO: Make work with multiple values here
    if (typeof desiredData === "object" && desiredData.length > 1) {
      return accumulator;
    } else {
      return accumulator + `${attackNumber > 1 ? ` /` : ""} ${desiredData}`;
    }
  }, "");

  return (
    <div>
      {name}:{message}
    </div>
  );
}

// -----------------------------------------------------------------------------

export default ArrayDisplay;
