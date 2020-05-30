import React from "react";
import PropTypes from "prop-types";

// -----------------------------------------------------------------------------

function CellUnlockCost(props) {
  const { name, value, img } = props;

  if (value === undefined) {
    return null;
  }

  const valueZero = value === 0;

  return (
    <tr>
      <td>{name}</td>
      <td>
        {valueZero ? "Already Unlocked" : value} {img}
      </td>
    </tr>
  );
}

CellUnlockCost.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  img: PropTypes.node,
};

CellUnlockCost.defaultProps = {
  value: undefined,
  img: undefined,
};

// -----------------------------------------------------------------------------

export default CellUnlockCost;
