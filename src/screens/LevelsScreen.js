import React from "react";
import _get from "lodash.get";

// Screens.
import EnemiesScreen from "./Levels/EnemiesScreen";

// -----------------------------------------------------------------------------

const LevelsScreen = (props) => {
  const { userInput } = props;

  return (
    <div className="DisplayCard">
      <EnemiesScreen userInput={userInput} />
    </div>
  );
};

// -----------------------------------------------------------------------------

export default LevelsScreen;
