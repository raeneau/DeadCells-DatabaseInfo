import React from "react";
import _get from "lodash.get";

import BasicDisplay from "../../components/common/basicDisplay";
import ArrayDisplay from "../../components/common/arrayDisplay";
import BasicPercentageDisplay from "../../components/common/basicPercentageDisplay";
import BaseDps from "../../components/items/baseDps";

// -----------------------------------------------------------------------------

function DamageScreen(props) {
  const { itemJson, weaponJson } = props;

  return (
    <div>
      <h3 className="SubHeader">Damage / Combat</h3>
      <table>
        <tbody>
          <BaseDps array={_get(weaponJson, "strikeChain")} />
          <BasicDisplay name="Ammo" value={_get(itemJson, "props.ammo")} />
          <BasicPercentageDisplay
            name="Block Damage Reduction"
            value={_get(itemJson, "props.prct")}
            defaultValue={0.75}
            requiredType="Shield"
            actualType={_get(itemJson, "__separator_group_Name")}
          />
          <ArrayDisplay
            name="Damage on Hit"
            array={_get(weaponJson, "strikeChain")}
            objectKey="power"
          />
          <ArrayDisplay
            name="Breach Bonus"
            array={_get(weaponJson, "strikeChain")}
            objectKey="breachBonus"
          />
        </tbody>
      </table>
    </div>
  );
}

// -----------------------------------------------------------------------------

export default DamageScreen;
