import React from "react";

export default (
  <div>
    <h4>July 14th 2020</h4>
    <li>
      Added offhand items for 2-handed weapons (<b>WIP</b> - they are not
      included when searching for a 2-handed weapon and some of the values are
      NaNs)
    </li>
    <li>
      Fixed locations of enemies so if they have ranges that add up to 0-5BC, it
      will just display 0BC+
    </li>
    <li>
      Changed location for enemies so if an enemy is missing from a difficulty
      in the middle, the location will display as two ranges (Ex: 0-1BC & 3-5BC)
    </li>
    <li>
      Hee hee hoo hoo stopped the difficulty locations from being wacky if there
      are 2 entries of the exact same BC range
    </li>
  </div>
);
