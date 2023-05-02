import React from "react";
import PropTypes from "prop-types";

// -----------------------------------------------------------------------------

const Scaling = (props) => {
  const { firstColor, secondColor } = props;

  // There will never be a second color if there isnt a first (I hope?)
  if (firstColor === undefined) {
    return null;
  }

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
};

Scaling.propTypes = {
  firstColor: PropTypes.string.isRequired,
  secondColor: PropTypes.string,
};

Scaling.defaultProps = {
  secondColor: undefined,
};

// -----------------------------------------------------------------------------

export default Scaling;
