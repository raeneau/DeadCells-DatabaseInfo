import React from "react";

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
      <h4>What&apos;s new? - May 17th 2020</h4>
      <ul>
        <li>
          <b>Enemies</b> and <b>Shields</b> now searchable by name (and by
          nickname!)
        </li>
        <li>Enemy locations are in-game names instead of internal IDs</li>
        <li>
          Resources with the same name will display a screen of possible matches
          (example: &quot;shield&quot;)
        </li>
      </ul>
    </div>
  );
}

// -----------------------------------------------------------------------------

export default WhatsNewScreen;
