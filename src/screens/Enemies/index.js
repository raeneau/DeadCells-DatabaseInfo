import React, { useContext } from "react";
import _get from "lodash.get";

// Screens.
import LocationScreen from "./LocationScreen";
import DropsScreen from "./DropsScreen";
import EnemyInfoScreen from "./EnemyInfoScreen";
import ResultsHeader from "../../components/common/resultsHeader";
import searchResultsContext from "../../context/SearchResultsContext";

// -----------------------------------------------------------------------------

const EnemiesScreen = () => {
  const [searchResults] = useContext(searchResultsContext);

  const { results } = searchResults;
  const enemyJson = _get(results, "enemyJson");
  const name = _get(searchResults, "name");

  return (
    <div className="DisplayCard">
      <ResultsHeader value={name} />
      <EnemyInfoScreen enemyJson={enemyJson} />
      <LocationScreen userInput={results} />
      <DropsScreen blueprintsDropped={_get(results, "enemyJson.blueprints")} />
    </div>
  );
};

// -----------------------------------------------------------------------------

export default EnemiesScreen;
