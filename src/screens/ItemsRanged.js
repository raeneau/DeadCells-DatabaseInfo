import React from "react";
import _get from "lodash.get";

// Screens.
import DamageScreen from "./ItemsRanged/DamageScreen";
import ItemMetaScreen from "./Items/ItemMetaScreen";
import ComboScreen from "./Items/ComboScreen";
import BlueprintScreen from "./Items/BlueprintScreen";

// -----------------------------------------------------------------------------

function Items(props) {
  const weaponJson = _get(props, "userInput.weaponJson");
  const itemJson = _get(props, "userInput.itemJson");
  const strikeChain = _get(weaponJson, "strikeChain");

  return (
    <div className="DisplayCard">
      <ItemMetaScreen itemJson={itemJson} itemName={_get(weaponJson, "item")} />
      <DamageScreen
        itemJson={itemJson}
        strikeChain={strikeChain}
        internalId={_get(props, "internalId")}
      />
      <ComboScreen strikeChain={strikeChain} />
      <BlueprintScreen cellCost={_get(itemJson, "cellCost")} />
    </div>
  );
}

// -----------------------------------------------------------------------------

export default Items;
