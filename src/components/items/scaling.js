import React from "react";

// -----------------------------------------------------------------------------

function Scaling(props) {
  const { firstColor, secondColor } = props;

  // There will never be a second color if there isnt a first (I hope?)
  if (firstColor === undefined) {
    return null;
  }

  console.log(secondColor, secondColor === "Tactic");

  const updatedFirstColor = firstColor === "Tactic" ? "Tactics" : firstColor;
  const updatedSecondColor = secondColor === "Tactic" ? "Tactics" : secondColor;

  return (
    <tr>
      <td>Scaling</td>
      <td>
        {updatedFirstColor}
        {secondColor !== undefined ? ` / ${updatedSecondColor}` : null}
      </td>
    </tr>
  );
}

// -----------------------------------------------------------------------------

export default Scaling;
