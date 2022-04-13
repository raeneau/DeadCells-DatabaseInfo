import React from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";

// Screens.
import LocationScreen from "./Enemies/LocationScreen";
import DropsScreen from "./Enemies/DropsScreen";
import EnemyInfoScreen from "./Enemies/EnemyInfoScreen";
import ResultsHeader from "../components/common/resultsHeader";

// -----------------------------------------------------------------------------

function EnemiesScreen(props) {
  const { userInput, databaseVersion } = props;
  const enemyJson = _get(props, "userInput.enemyJson");
  const name = _get(props, "name");

  return (
    <div className="DisplayCard">
      <ResultsHeader value={name} />
      <EnemyInfoScreen enemyJson={enemyJson} />
      <LocationScreen userInput={userInput} databaseVersion={databaseVersion} />
      <DropsScreen
        blueprintsDropped={_get(userInput, "enemyJson.blueprints")}
      />
    </div>
  );
}

EnemiesScreen.propTypes = {
  databaseVersion: PropTypes.string.isRequired,
  userInput: PropTypes.shape({
    enemyJson: PropTypes.shape({
      blueprints: PropTypes.arrayOf(
        PropTypes.shape({
          minDifficulty: PropTypes.number,
        }),
      ),
    }),
  }).isRequired,
};

// -----------------------------------------------------------------------------

export default EnemiesScreen;
