import React from "react";

import _get from "lodash.get";

// Constants.
import { criticalHitMul } from "../../constants/truelleConstants";

// -----------------------------------------------------------------------------

// TODO: Change to use DPS util
function BreachDPS(props) {
  const { array } = props;

  // If is no data, just return
  if (array === undefined || array.length === 0) {
    return null;
  }

  const dpsObject = array.reduce(
    (accumulator, element) => {
      const charge = _get(element, "charge", 0);
      const cooldown = _get(element, "coolDown", 0);
      const lockControlAfter = _get(element, "lockCtrlAfter", 0);
      const power = _get(element, "power[0]") || _get(element, "power", 0);
      const critMult = _get(element, "critMul", 1);
      const breachBonus = _get(element, "breachBonus");

      return {
        attackDamage: accumulator.attackDamage + (power + power * breachBonus),
        attackDuration:
          accumulator.attackDuration + (charge + cooldown + lockControlAfter),
        attackCritDamage:
          accumulator.attackCritDamage +
          power * criticalHitMul * critMult +
          power * criticalHitMul * critMult * breachBonus,
      };
    },
    {
      attackDamage: 0,
      attackDuration: 0,
      attackCritDamage: 0,
    },
  );

  return (
    <tr>
      <td>Breach DPS</td>
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

export default BreachDPS;
