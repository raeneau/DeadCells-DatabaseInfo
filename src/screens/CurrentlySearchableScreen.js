import React, { Fragment } from "react";

// -----------------------------------------------------------------------------

function NotFoundScreen() {
  return (
    <Fragment>
      <h4>Currently Searchable Categories:</h4>
      <ul>
        <li>Melee weapons</li>
        <li>Ranged weapons</li>
        <li>Shields</li>
        <li>Grenades</li>
        <li>Traps / Turrets</li>
        <li>Enemies (including bosses)</li>
      </ul>
    </Fragment>
  );
}

// -----------------------------------------------------------------------------

export default NotFoundScreen;
