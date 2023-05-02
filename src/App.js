import React, { useState, useMemo, useEffect } from "react";
import { MemoryRouter } from "react-router-dom";

// Screens.
import UserInputScreen from "./screens/UserInput";
import FeedbackScreen from "./screens/FeedbackScreen";
import ResultsScreen from "./screens/ResultsScreen";

// Styles.
import "./App.css";
import SearchResultsContext from "./context/SearchResultsContext";
import EnemyContext from "./context/EnemyContext";
import loadBiomeData from "./utils/dataLoading/loadBiomeData";
import loadEnemyData from "./utils/dataLoading/loadEnemyData";

// -----------------------------------------------------------------------------

const cnBase = "App";
const cn = {
  wrapper: `${cnBase}__wrapper`,
};

const App = () => {
  const [searchResults, setSearchResults] = useState({});
  const [enemyData, setEnemyData] = useState({});

  const memoizedContext = useMemo(
    () => [searchResults, setSearchResults],
    [searchResults],
  );

  useEffect(() => {
    const biomeData = loadBiomeData();
    const enemy = setEnemyData(loadEnemyData(biomeData));
    console.log("!", enemy);
  }, []);

  return (
    <div id="App" className={cn.wrapper}>
      <MemoryRouter>
        <SearchResultsContext.Provider value={memoizedContext}>
          <EnemyContext.Provider value={enemyData}>
            <UserInputScreen />
            <ResultsScreen />
            <FeedbackScreen />
          </EnemyContext.Provider>
        </SearchResultsContext.Provider>
      </MemoryRouter>
    </div>
  );
};

// -----------------------------------------------------------------------------

export default App;
