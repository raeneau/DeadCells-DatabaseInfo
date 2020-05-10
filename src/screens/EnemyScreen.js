import React from "react";

import enemyLocation from "../utils/enemyLocation";

import BasicDisplay from "../components/common/basicDisplay";
// -----------------------------------------------------------------------------

// const cnBase = "ItemProperties";

const EnemiesScreen = function EnemiesScreen(props) {
  const { userInput } = props;

  console.log("USERINPUT", userInput);
  enemyLocation({ enemy: userInput });
  return (
    <div className="DisplayCard">
      <BasicDisplay name="test" value="testing" />
    </div>
  );
};

// -----------------------------------------------------------------------------

export default EnemiesScreen;
