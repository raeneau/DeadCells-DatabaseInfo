import React from "react";
import _get from "lodash.get";

// Screens.
import DamageScreen from "./Items/DamageScreen";
import ItemMetaScreen from "./Items/ItemMetaScreen";
import ComboScreen from "./Items/ComboScreen";
import BlueprintScreen from "./Items/BlueprintScreen";

// Styles.
import "./Items.css";

// -----------------------------------------------------------------------------

function Items(props) {
  const weaponJson = _get(props, "userInput.weaponJson");
  const itemJson = _get(props, "userInput.itemJson");

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
