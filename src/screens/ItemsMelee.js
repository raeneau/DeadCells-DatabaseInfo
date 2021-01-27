import React from "react";
import _get from "lodash.get";

// Screens.
import DamageScreen from "./Items/DamageScreen";
import ItemMetaScreen from "./Items/ItemMetaScreen";
import ComboScreen from "./Items/ComboScreen";
import BlueprintScreen from "./Items/BlueprintScreen";

// -----------------------------------------------------------------------------

function Items(props) {
  const weaponJson = _get(props, "userInput.weaponJson");
  const itemJson = _get(props, "userInput.itemJson");
  const internalId = _get(props, "internalId");

  return (
    <div className="DisplayCard">
      <ItemMetaScreen itemJson={itemJson} itemName={_get(weaponJson, "item")} />
      <DamageScreen
        itemJson={itemJson}
        weaponJson={weaponJson}
        internalId={internalId}
      />
      <ComboScreen strikeChain={_get(weaponJson, "strikeChain")} />
      <BlueprintScreen
        cellCost={_get(itemJson, "cellCost")}
        internalId={internalId}
      />
    </div>
  );
}

// -----------------------------------------------------------------------------

export default Items;