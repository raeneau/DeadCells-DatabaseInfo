import React, { useContext } from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";

// Screens.
import EnemiesScreen from "../Levels/EnemiesScreen";
import ScrollCountScreen from "./ScrollCountScreen";
import ResultsHeader from "../../components/common/resultsHeader";
import searchResultsContext from "../../context/SearchResultsContext";

// -----------------------------------------------------------------------------

const LevelsScreen = () => {
  const [searchResults] = useContext(searchResultsContext);

  const { results } = searchResults;
  const name = _get(searchResults, "name");

  return (
    <div className="DisplayCard">
      <ResultsHeader value={name} />
      <ScrollCountScreen userInput={results} />
      <EnemiesScreen userInput={results} />
    </div>
  );
};

LevelsScreen.propTypes = {
  userInput: PropTypes.shape({
    itemJson: PropTypes.shape({
      tripleUps: PropTypes.number,
      doubleUps: PropTypes.number,
      quarterUpsBC3: PropTypes.number,
      quarterUpsBC4: PropTypes.number,
    }).isRequired,
  }).isRequired,
};

// -----------------------------------------------------------------------------

export default LevelsScreen;
