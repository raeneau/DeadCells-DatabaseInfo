import React from "react";

// -----------------------------------------------------------------------------

function AttackDuration(props) {
  const { charge, cooldown } = props;

  // If there is no attack duration, return nothin'
  if (charge === null && cooldown === null) {
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

// -----------------------------------------------------------------------------

export default AttackDuration;
