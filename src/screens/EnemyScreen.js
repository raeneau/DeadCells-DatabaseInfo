import React from "react";
import _get from "lodash.get";

// Screens.
import LocationScreen from "./Enemies/LocationScreen";
import DropsScreen from "./Enemies/DropsScreen";
import EnemyInfoScreen from "./Enemies/EnemyInfoScreen";

// -----------------------------------------------------------------------------

const EnemiesScreen = (props) => {
  const { userInput } = props;
  const enemyJson = _get(props, "userInput.enemyJson");

  return (
    <div className="DisplayCard">
      <EnemyInfoScreen enemyJson={enemyJson} />
      <LocationScreen userInput={userInput} />
      <DropsScreen
        blueprintsDropped={_get(userInput, "enemyJson.blueprints")}
      />
    </div>
  );
};

// -----------------------------------------------------------------------------

export default EnemiesScreen;
