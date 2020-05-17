import React from "react";

import _get from "lodash.get";

// -----------------------------------------------------------------------------

function BaseDps(props) {
  const { array } = props;

  // If is no data, just return
  if (array === undefined || array.length === 0) {
    return null;
  }

  const dpsObject = array.reduce(
    (accumulator, element) => {
      const charge = _get(element, "charge", 0);
      const cooldown = _get(element, "cooldown", 0);
      const lockControlAfter = _get(element, "lockCtrlAfter", 0);
      const power = _get(element, "power[0]");
      const critMult = _get(element, "critMul");

      return {
        attackDamage: accumulator.attackDamage + power,
        attackDuration:
          accumulator.attackDuration + (charge + cooldown + lockControlAfter),
        // TODO: Make the CRIT MULTIPLIER (2) a CONSTANT in case devs change it
        attackCritDamage:
          accumulator.attackCritDamage + power * 2 * _get(critMult, "", 1),
      };
    },
    {
      attackDamage: 0,
      attackDuration: 0,
      // TODO: Make the CRIT MULTIPLIER a CONSTANT in case devs change it
      attackCritDamage: 0,
    },
  );

  console.log(
    dpsObject.attackDamage,
    dpsObject.attackDuration,
    dpsObject.attackCritDamage,
  );

  return (
    <tr>
      <td>Base DPS</td>
      <td>
        {Math.round(dpsObject.attackDamage / dpsObject.attackDuration)} (
        {Math.round(dpsObject.attackCritDamage / dpsObject.attackDuration)})
      </td>
    </tr>
  );
}

// (sum of all powers) / (sum of all charge + cooldown + lockCtrlAfter) ROUNDED UP
// 310

// -----------------------------------------------------------------------------

export default BaseDps;
