import React from "react";
import _get from "lodash.get";

import enemyLocation from "../enemies/enemyLocation";

import BasicDisplay from "../items/basicDisplay";
// -----------------------------------------------------------------------------
const errorMessage = "Error retrieving data";

const cnBase = "ItemProperties";
const cn = {
  wrapper: `${cnBase}__wrapper`,
};

const EnemiesScreen = function EnemiesScreen(props) {
  // const { userInput } = props;

  const userInput = "Zombie";
  enemyLocation({ enemy: userInput });
  return (
    <div className={cn.wrapper}>
      <BasicDisplay name={"test"} value={"testing"} />
    </div>
  );
};

// -----------------------------------------------------------------------------

export default EnemiesScreen;
