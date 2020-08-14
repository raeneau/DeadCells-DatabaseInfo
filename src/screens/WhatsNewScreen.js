import React from "react";

// Styles.
import "./WhatsNewScreen.css";

// Current release notes.
import currentNewFeatures from "./WhatsNew/AUGUST_13_2020";

// -----------------------------------------------------------------------------

const cnBase = "WhatsNewScreen";
const cn = {
  wrapper: `${cnBase}__wrapper`,
};

function WhatsNewScreen() {
  return (
    <div className={cn.wrapper}>
      <h4>What&apos;s new? - August 13th, 2020</h4>
      <ul>{currentNewFeatures}</ul>
    </div>
  );
}

// -----------------------------------------------------------------------------

export default WhatsNewScreen;
