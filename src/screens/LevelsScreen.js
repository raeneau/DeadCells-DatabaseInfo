import React from "react";
import _get from "lodash.get";

// Screens.
import EnemiesScreen from "./Levels/EnemiesScreen";
import ScrollCountScreen from "./LevelsScreen/ScrollCountScreen";
import ResultsHeader from "../components/common/resultsHeader";

// -----------------------------------------------------------------------------

const LevelsScreen = (props) => {
  const { userInput } = props;
  const name = _get(props, "name");

  return (
    <div className="DisplayCard">
      <ResultsHeader value={name} />
      <ScrollCountScreen userInput={userInput} />
      <EnemiesScreen userInput={userInput} />
    </div>
  );
};

// -----------------------------------------------------------------------------

export default LevelsScreen;
