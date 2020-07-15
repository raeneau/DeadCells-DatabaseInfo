import React, { Fragment } from "react";

// -----------------------------------------------------------------------------

function NotFoundScreen() {
  return (
    <Fragment>
      <h4>Currently Searchable Categories:</h4>
      <ul>
        <li>Melee weapons</li>
        <li>Ranged weapons (WIP - DPS is not accurate)</li>
        <li>Shields</li>
        <li>Grenades</li>
        <li>Enemies</li>
      </ul>
      <div>
        <b>*only searchable by internal ID</b>
      </div>
    </Fragment>
  );
}

// -----------------------------------------------------------------------------

export default NotFoundScreen;
