import React, { useContext } from "react";
import _get from "lodash.get";

// Screens.
import DamageScreen from "./DamageScreen";
import ItemMetaScreen from "../ItemsMelee/ItemMetaScreen";
import BlueprintScreen from "../ItemsMelee/BlueprintScreen";
import ResultsHeader from "../../components/common/resultsHeader";
import searchResultsContext from "../../context/SearchResultsContext";

// -----------------------------------------------------------------------------

const ItemsGrenades = () => {
  const [searchResults] = useContext(searchResultsContext);

  const itemJson = _get(searchResults, "results.itemJson");
  const internalId = _get(searchResults, "internalId");
  const name = _get(searchResults, "name");

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
};

// -----------------------------------------------------------------------------

export default ItemsGrenades;
