import React from "react";

import "./FeedbackScreen.css";

// -----------------------------------------------------------------------------

const cnBase = "FeedbackScreen";
const cn = {
  wrapper: `${cnBase}__wrapper`,
  header: `${cnBase}__header`,
};

function FeedbackScreen() {
  return (
    <div className="DisplayCard">
      <div className={cn.wrapper}>
        <h3 className={cn.header}>Problems? Feedback?</h3>
        <ul>
          <div>
            Contact <b>Raeneau#2263</b> on Discord
          </div>
          <div>Also, maybe take a deep breath or something.</div>
          <div>Or go get a snack.</div>
        </ul>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------

export default FeedbackScreen;
