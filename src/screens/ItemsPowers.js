import React from "react";
import _get from "lodash.get";

// Screens.
import ItemMetaScreen from "./Items/ItemMetaScreen";
import BlueprintScreen from "./Items/BlueprintScreen";
import ResultsHeader from "../components/common/resultsHeader";
import DamageScreen from "./ItemsPowers/DamageScreen";

// -----------------------------------------------------------------------------

function ItemsTraps(props) {
  const itemJson = _get(props, "userInput.itemJson");
  const internalId = _get(props, "internalId");
  const name = _get(props, "name");

  return (
    <div className="DisplayCard">
      <ResultsHeader value={name} />
      <ItemMetaScreen itemJson={itemJson} itemName={_get(itemJson, "id")} />
      <DamageScreen itemJson={itemJson} />
      <BlueprintScreen
        cellCost={_get(itemJson, "cellCost")}
        internalId={internalId}
      />
    </div>
  );
}

// -----------------------------------------------------------------------------

export default ItemsTraps;
