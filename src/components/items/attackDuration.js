import React from "react";
import PropTypes from "prop-types";

// -----------------------------------------------------------------------------

function AttackDuration(props) {
  const { charge, cooldown } = props;

  // If there is no attack duration, return nothin'
  if (charge === undefined && cooldown === undefined) {
    return null;
  }

  return (
    <tr>
      <td>Attack Duration</td>
      <td>
        {(charge + cooldown).toFixed(2)} ({charge} + {cooldown}) seconds
      </td>
    </tr>
  );
}

AttackDuration.propTypes = {
  charge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cooldown: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AttackDuration.defaultProps = {
  charge: undefined,
  cooldown: undefined,
};

// -----------------------------------------------------------------------------

export default AttackDuration;
