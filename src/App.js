import React from "react";

// Screens.
import UserInputScreen from "./screens/UserInput";
import FeedbackScreen from "./screens/FeedbackScreen";
import ResultsScreen from "./screens/ResultsScreen";

// Styles.
import "./App.css";

// -----------------------------------------------------------------------------

const cnBase = "App";
const cn = {
  wrapper: `${cnBase}__wrapper`,
};
function App() {
  return (
    <div id="App" className={cn.wrapper}>
      <UserInputScreen />
      <ResultsScreen />
      <FeedbackScreen />
    </div>
  );
}

// -----------------------------------------------------------------------------

export default App;
