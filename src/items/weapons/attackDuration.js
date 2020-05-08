import React from "react";
import _get from "lodash.get";

// -----------------------------------------------------------------------------

function AttackDuration(props) {
  const { charge, cooldown } = props;

  // If there is no attack duration, return nothin'
  if (charge === null && cooldown === null) {
    return null;
  }

  return (
    <div>
      <span>
        Attack Duration: {(charge + cooldown).toFixed(2)} ({charge} + {cooldown}
        ) seconds
      </span>
    </div>
  );
}

// -----------------------------------------------------------------------------

export default AttackDuration;
