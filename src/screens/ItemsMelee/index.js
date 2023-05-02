import React, { useContext } from "react";
import _get from "lodash.get";

// Screens.
import DamageScreen from "./DamageScreen";
import ItemMetaScreen from "./ItemMetaScreen";
import ComboScreen from "./ComboScreen";
import BlueprintScreen from "./BlueprintScreen";
import ResultsHeader from "../../components/common/resultsHeader";

// Context.
import searchResultsContext from "../../context/SearchResultsContext";

// -----------------------------------------------------------------------------

const ItemsMelee = () => {
  const [searchResults] = useContext(searchResultsContext);

  const weaponJson = _get(searchResults, "results.weaponJson");
  const itemJson = _get(searchResults, "results.itemJson");
  const internalId = _get(searchResults, "internalId");
  const name = _get(searchResults, "name");

  return (
    <div className="DisplayCard">
      <ResultsHeader value={name} />
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
};

// -----------------------------------------------------------------------------

export default ItemsMelee;
