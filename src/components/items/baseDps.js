import React from "react";

import _get from "lodash.get";

// -----------------------------------------------------------------------------

function BaseDps(props) {
  const { array } = props;

  // If is no data, just return
  if (array === undefined || array.length === 0) {
    return null;
  }

  // If crit is not allowed on even a single attack, don't show crit DPS damage
  let critAllowed = true;

  const dpsObject = array.reduce(
    (accumulator, element) => {
      const charge = _get(element, "charge", 0);
      const cooldown = _get(element, "cooldown", 0);
      const lockControlAfter = _get(element, "lockCtrlAfter", 0);
      const power = _get(element, "power[0]");
      const critMult = _get(element, "critMul", 1);
      const canCrit = _get(element, "canCrit");

      if (!canCrit) {
        critAllowed = false;
      }

      return {
        attackDamage: accumulator.attackDamage + power,
        attackDuration:
          accumulator.attackDuration + (charge + cooldown + lockControlAfter),
        // TODO: Make the CRIT MULTIPLIER (2) a CONSTANT in case devs change it?
        attackCritDamage: accumulator.attackCritDamage + power * 2 * critMult,
      };
    },
    {
      attackDamage: 0,
      attackDuration: 0,
      // TODO: Make the CRIT MULTIPLIER a CONSTANT in case devs change it
      attackCritDamage: 0,
    },
  );

  const critDamage = critAllowed
    ? ` (${Math.round(dpsObject.attackCritDamage / dpsObject.attackDuration)})`
    : "";

  return (
    <tr>
      <td>Base DPS</td>
      <td>
        {Math.round(dpsObject.attackDamage / dpsObject.attackDuration)}
        {critDamage}
      </td>
    </tr>
  );
}

// (sum of all powers) / (sum of all charge + cooldown + lockCtrlAfter) ROUNDED UP
// 310

// -----------------------------------------------------------------------------

export default BaseDps;
