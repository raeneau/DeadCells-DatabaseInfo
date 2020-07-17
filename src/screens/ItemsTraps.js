import React from "react";
import _get from "lodash.get";

// Screens.
import DamageScreen from "./ItemsTraps/DamageScreen";
import ItemMetaScreen from "./Items/ItemMetaScreen";
import BlueprintScreen from "./Items/BlueprintScreen";

// -----------------------------------------------------------------------------

function ItemsTraps(props) {
  const { itemJson } = props.userInput;

  return (
    <div className="DisplayCard">
      <ItemMetaScreen itemJson={itemJson} itemName={_get(itemJson, "id")} />
      <DamageScreen itemJson={itemJson} />
      <BlueprintScreen cellCost={_get(itemJson, "cellCost")} />
    </div>
  );
}

// -----------------------------------------------------------------------------

export default ItemsTraps;