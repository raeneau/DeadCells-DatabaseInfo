import React from "react";
import _get from "lodash.get";

import "./NotFound.css";

// -----------------------------------------------------------------------------

const cnBase = "NotFoundScreen";
const cn = {
  searchTerm: `${cnBase}__searchTerm`,
  notesWrapper: `${cnBase}__notesWrapper`,
};

function NotFoundScreen(props) {
  const userSearchTerm = _get(props, "userSearchTerm");

  return (
    <div className="DisplayCard">
      <h2>Oops! - Not Found</h2>
      <div className={cn.notesWrapper}>
        <ul>
          <div>Sorry! I couldn&apos;t find anything about:</div>
          <div className={cn.searchTerm}>{userSearchTerm}</div>
          <div>
            Please make sure the resource you&apos;re trying to find is
            available in the list at the top of the page, and that you are
            searching with the correct term.
          </div>
          <br />
          <div>
            If you still think this is an error, please contact Raeneau on the
            Dead Cells discord.
          </div>
        </ul>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------

export default NotFoundScreen;
