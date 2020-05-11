import React from "react";

import LocationScreen from "./Enemies/LocationScreen";

// -----------------------------------------------------------------------------

// const cnBase = "ItemProperties";

const EnemiesScreen = (props) => {
  const { userInput } = props;

  return (
    <div className="DisplayCard">
      <LocationScreen userInput={userInput} />
    </div>
  );
};

// -----------------------------------------------------------------------------

export default EnemiesScreen;
