import React from "react";

import _get from "lodash.get";

// -----------------------------------------------------------------------------

function BaseDps(props) {
  const { array } = props;

  // If is no data, just return
  if (array === undefined || array.length === 0) {
    return null;
  }

  const attackDurationTotal = array.reduce((accumulator, element) => {
    const charge = _get(element, "charge", 0);
    const cooldown = _get(element, "cooldown", 0);
    const lockControlAfter = _get(element, "lockCtrlAfter", 0);
    return accumulator + (charge + cooldown + lockControlAfter);
  }, 0);

  const attackDamageTotal = array.reduce(
    (accumulator, element) => accumulator + _get(element, "power[0]"),
    0,
  );

  return (
    <tr>
      <td>Base DPS</td>
      <td>{Math.round(attackDamageTotal / attackDurationTotal)}</td>
    </tr>
  );
}

// (sum of all powers) / (sum of all charge + cooldown + lockCtrlAfter) ROUNDED UP
// 310

// -----------------------------------------------------------------------------

export default BaseDps;
