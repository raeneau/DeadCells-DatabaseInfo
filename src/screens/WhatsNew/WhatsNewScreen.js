import React from "react";

// Current release notes.
import currentNewFeatures from "./2023/03_MARCH_06_2023";

// Constants.
import { UPDATE_DATE } from "../../constants/databaseVersion";

// Styles.
import "./WhatsNewScreen.css";

// -----------------------------------------------------------------------------

const cnBase = "WhatsNewScreen";
const cn = {
  wrapper: `${cnBase}__wrapper`,
};

const WhatsNewScreen = () => (
  <div className={cn.wrapper}>
    <h4>What&apos;s new? - {UPDATE_DATE}</h4>
    <ul>{currentNewFeatures}</ul>
  </div>
);

// -----------------------------------------------------------------------------

export default WhatsNewScreen;
