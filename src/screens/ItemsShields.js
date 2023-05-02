import React from "react";
import _get from "lodash.get";

// Screens.
import DamageScreen from "./ItemsShield/DamageScreen";
import ItemMetaScreen from "./ItemsMelee/ItemMetaScreen";
import ComboScreen from "./ItemsMelee/ComboScreen";
import BlueprintScreen from "./ItemsMelee/BlueprintScreen";
import ResultsHeader from "../components/common/resultsHeader";

// -----------------------------------------------------------------------------

const ItemsShields = (props) => {
  const weaponJson = _get(props, "userInput.weaponJson");
  const itemJson = _get(props, "userInput.itemJson");
  const internalId = _get(props, "internalId");
  const name = _get(props, "name");

  return (
    <div className="DisplayCard">
      <ResultsHeader value={name} />
      <ItemMetaScreen itemJson={itemJson} itemName={_get(weaponJson, "item")} />
      <DamageScreen itemJson={itemJson} weaponJson={weaponJson} />
      <ComboScreen strikeChain={_get(weaponJson, "strikeChain")} />
      <BlueprintScreen
        cellCost={_get(itemJson, "cellCost")}
        internalId={internalId}
      />
    </div>
  );
};

// -----------------------------------------------------------------------------

export default ItemsShields;
