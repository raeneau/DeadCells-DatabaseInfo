import React from "react";

import "./FeedbackScreen.css";

// -----------------------------------------------------------------------------

const cnBase = "FeedbackScreen";
const cn = {
  wrapper: `${cnBase}__wrapper`,
  header: `${cnBase}__header`,
};

const FeedbackScreen = () => (
  <div className="DisplayCard">
    <div className={cn.wrapper}>
      <h3 className={cn.header}>Problems? Feedback?</h3>
      <ul>
        <div>
          Contact <b>Raeneau#2263</b> on Discord!
        </div>
        <div>Also, take a deep breath and go get a snack. 💕</div>
      </ul>
    </div>
  </div>
);

// -----------------------------------------------------------------------------

export default FeedbackScreen;
