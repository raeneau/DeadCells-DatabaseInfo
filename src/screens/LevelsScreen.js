import React from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";

// Screens.
import EnemiesScreen from "./Levels/EnemiesScreen";
import ScrollCountScreen from "./LevelsScreen/ScrollCountScreen";
import ResultsHeader from "../components/common/resultsHeader";

// -----------------------------------------------------------------------------

function LevelsScreen(props) {
  const { userInput } = props;
  const name = _get(props, "name");

  return (
    <div className="DisplayCard">
      <ResultsHeader value={name} />
      <ScrollCountScreen userInput={userInput} />
      <EnemiesScreen userInput={userInput} />
    </div>
  );
}

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
