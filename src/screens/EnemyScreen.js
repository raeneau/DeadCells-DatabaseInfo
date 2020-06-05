import React from "react";

// Screens.
import LocationScreen from "./Enemies/LocationScreen";
import DropsScreen from "./Enemies/DropsScreen";

// -----------------------------------------------------------------------------

const EnemiesScreen = (props) => {
  const { userInput } = props;

  return (
    <div className="DisplayCard">
      <LocationScreen userInput={userInput} />
      <DropsScreen userInput={userInput} />
    </div>
  );
};

// -----------------------------------------------------------------------------

export default EnemiesScreen;
