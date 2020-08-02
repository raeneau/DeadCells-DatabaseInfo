import React from "react";

// <h4>August 1st 2020</h4>
export default (
  <div>
    <li>
      Changed DPS calculations to the ones provided by Noja (some are still
      inaccurate)
    </li>
    <li>
      Added new framework to handle DPS of weapons that are "special", as in
      they don't use the usual DPS algorithm. Fixed about half of those weapons
    </li>
    <li>
      Added crit activation comments to certain weapons that either don't crit
      or only crit during a special condition (like only on 3rd hit)
    </li>
    <li>Added more nicknames to weapons, fixed typos</li>
    <li>
      Rearranged my code so it's more manageable, yes I know I'm the only one
      that cares :-)
    </li>
    <br />
    <b>CAUTION: These weapons have INACCURATE DPS:</b>
    <li>Valmont's Whip</li>
    <li>Tentacle</li>
    <li>Flint</li>
    <li>Explosive Crossbow</li>
    <li>Boomerang</li>
    <li>Boy's Axe</li>
  </div>
);
