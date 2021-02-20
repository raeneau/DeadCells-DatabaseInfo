import React from "react";

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
