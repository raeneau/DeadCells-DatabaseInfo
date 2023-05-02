import React, { useContext } from "react";
import _get from "lodash.get";

// Screens.
import DamageScreen from "./DamageScreen";
import ItemMetaScreen from "../ItemsMelee/ItemMetaScreen";
import ComboScreen from "../ItemsMelee/ComboScreen";
import BlueprintScreen from "../ItemsMelee/BlueprintScreen";
import ResultsHeader from "../../components/common/resultsHeader";

// Context.
import searchResultsContext from "../../context/SearchResultsContext";

// -----------------------------------------------------------------------------

const ItemsRanged = () => {
  const [searchResults] = useContext(searchResultsContext);

  const weaponJson = _get(searchResults, "results.weaponJson");
  const itemJson = _get(searchResults, "results.itemJson");
  const strikeChain = _get(weaponJson, "strikeChain");
  const internalId = _get(searchResults, "internalId");
  const name = _get(searchResults, "name");

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
};

// -----------------------------------------------------------------------------

export default ItemsRanged;
