import React from "react";
import _get from "lodash.get";

import DamageScreen from "./Items/DamageScreen";
import ItemMetaScreen from "./Items/ItemMetaScreen";
import ComboScreen from "./Items/ComboScreen";
import BlueprintScreen from "./Items/BlueprintScreen";

import "./Items.css";

// -----------------------------------------------------------------------------

function Items(props) {
  const { itemJson, weaponJson } = props.userInput;

  return (
    <div className="DisplayCard">
      <ItemMetaScreen itemJson={itemJson} itemName={_get(weaponJson, "item")} />
      <DamageScreen itemJson={itemJson} weaponJson={weaponJson} />
      <ComboScreen strikeChain={_get(weaponJson, "strikeChain")} />
      <BlueprintScreen cellCost={_get(itemJson, "cellCost")} />
    </div>
  );
}

// -----------------------------------------------------------------------------

export default Items;
