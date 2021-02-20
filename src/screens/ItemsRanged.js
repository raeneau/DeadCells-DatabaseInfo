import React from "react";
import _get from "lodash.get";

// Screens.
import DamageScreen from "./ItemsRanged/DamageScreen";
import ItemMetaScreen from "./Items/ItemMetaScreen";
import ComboScreen from "./Items/ComboScreen";
import BlueprintScreen from "./Items/BlueprintScreen";
import ResultsHeader from "../components/common/resultsHeader";

// -----------------------------------------------------------------------------

function Items(props) {
  const weaponJson = _get(props, "userInput.weaponJson");
  const itemJson = _get(props, "userInput.itemJson");
  const strikeChain = _get(weaponJson, "strikeChain");
  const internalId = _get(props, "internalId");
  const name = _get(props, "name");

  return (
    <div className="DisplayCard">
      <ResultsHeader value={name} />
      <ItemMetaScreen itemJson={itemJson} itemName={_get(weaponJson, "item")} />
      <DamageScreen
        itemJson={itemJson}
        strikeChain={strikeChain}
        internalId={internalId}
      />
      <ComboScreen strikeChain={strikeChain} />
      <BlueprintScreen
        cellCost={_get(itemJson, "cellCost")}
        internalId={internalId}
      />
    </div>
  );
}

// -----------------------------------------------------------------------------

export default Items;
