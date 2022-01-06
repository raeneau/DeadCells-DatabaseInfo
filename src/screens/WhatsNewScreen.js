import React from "react";

// Current release notes.
import currentNewFeatures from "./WhatsNew/2022/01-JAN_06_2021";

// Constants.
import { UPDATE_DATE } from "../constants/databaseVersion";

// Styles.
import "./WhatsNewScreen.css";

// -----------------------------------------------------------------------------

const cnBase = "WhatsNewScreen";
const cn = {
  wrapper: `${cnBase}__wrapper`,
};

function WhatsNewScreen() {
  return (
    <div className={cn.wrapper}>
      <h4>What&apos;s new? - {UPDATE_DATE}</h4>
      <ul>{currentNewFeatures}</ul>
    </div>
  );
}

// -----------------------------------------------------------------------------

export default WhatsNewScreen;
