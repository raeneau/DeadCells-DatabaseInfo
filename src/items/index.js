import React from "react";
import _get from "lodash.get";

import BasicDisplay from "./basicDisplay";
import ArrayDisplay from "./arrayDisplay";
import Scaling from "./scaling";
import ComboRate from "./comboRate";
import BaseDps from "./baseDps";
import Tags from "./tags";

import "./index.css";
import AttackDuration from "./attackDuration";

// -----------------------------------------------------------------------------
const errorMessage = "Error retrieving data";

const cnBase = "ItemProperties";
const cn = {
  wrapper: `${cnBase}__wrapper`,
};

function Items(props) {
  const itemJson = props.userInput.itemJson;
  const weaponJson = props.userInput.weaponJson;

  return (
    <div className={cn.wrapper}>
      <BasicDisplay
        name="Internal Name"
        value={_get(weaponJson, "item", errorMessage)}
      />
      <BasicDisplay name="Ammo" value={_get(itemJson, "props.ammo")} />
      <BasicDisplay
        name="Type"
        value={_get(itemJson, "__separator_group_Name", errorMessage)}
      />
      <Scaling
        firstColor={_get(itemJson, "tier1", "")}
        secondColor={_get(itemJson, "tier2", null)}
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
      <BasicDisplay
        name="Base Price"
        value={_get(itemJson, "moneyCost", errorMessage)}
      />
      <BasicDisplay
        name="Unlock Cost"
        value={_get(itemJson, "cellCost", errorMessage)}
      />
      <Tags tagArray={_get(itemJson, "tags", [])} />
      <BasicDisplay
        name="Forced Affix"
        value={_get(itemJson, "legendAffix", errorMessage)}
      />
    </div>
  );
}

// -----------------------------------------------------------------------------

export default Items;
