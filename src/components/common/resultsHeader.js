import React from "react";
import PropTypes from "prop-types";

import "./resultsHeader.css";

// -----------------------------------------------------------------------------

const cnBase = "ResultsHeader";
const cn = {
  wrapper: `${cnBase}__wrapper`,
};

const ResultsHeader = (props) => {
  const { value } = props;

  if (value === undefined) {
    return null;
  }

  return (
    <div className={cn.wrapper}>
      <div>Showing results for:</div>
      <h3>{value}</h3>
    </div>
  );
};

ResultsHeader.propTypes = {
  value: PropTypes.string,
};

ResultsHeader.defaultProps = {
  value: undefined,
};

// -----------------------------------------------------------------------------

export default ResultsHeader;
