import React from "react";
import _get from "lodash.get";

import BasicDisplay from "../components/common/basicDisplay";
import ArrayDisplay from "../components/common/arrayDisplay";
import BasicPercentageDisplay from "../components/common/basicPercentageDisplay";

import Scaling from "../components/items/scaling";
import ComboRate from "../components/items/comboRate";
import BaseDps from "../components/items/baseDps";
import Tags from "../components/items/tags";

import "./Items.css";
import AttackDuration from "../components/items/attackDuration";

// -----------------------------------------------------------------------------

function Items(props) {
  const itemJson = props.userInput.itemJson;
  const weaponJson = props.userInput.weaponJson;

  return (
    <div className="DisplayCard">
      <table>
        <tbody>
          <BasicDisplay name="Internal Name" value={_get(weaponJson, "item")} />
          <BasicDisplay name="Ammo" value={_get(itemJson, "props.ammo")} />
          <BasicDisplay
            name="Type"
            value={_get(itemJson, "__separator_group_Name")}
          />
          <Scaling
            firstColor={_get(itemJson, "tier1")}
            secondColor={_get(itemJson, "tier2")}
          />
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
          <ComboRate array={_get(weaponJson, "strikeChain")} />
          <BaseDps array={_get(weaponJson, "strikeChain")} />
          <ArrayDisplay
            name="Breach Bonus"
            array={_get(weaponJson, "strikeChain")}
            objectKey="breachBonus"
          />
          <AttackDuration
            charge={_get(weaponJson, "strikeChain[0].charge", null)}
            cooldown={_get(weaponJson, "strikeChain[0].coolDown", null)}
          />
          <ArrayDisplay
            name="Lock"
            array={_get(weaponJson, "strikeChain")}
            objectKey="lockCtrlAfter"
          />
          <BasicDisplay name="Base Price" value={_get(itemJson, "moneyCost")} />
          <BasicDisplay name="Unlock Cost" value={_get(itemJson, "cellCost")} />
          <Tags tagArray={_get(itemJson, "tags", null)} />
          <BasicDisplay
            name="Forced Affix"
            value={_get(itemJson, "legendAffix")}
          />
        </tbody>
      </table>
    </div>
  );
}

// -----------------------------------------------------------------------------

export default Items;
