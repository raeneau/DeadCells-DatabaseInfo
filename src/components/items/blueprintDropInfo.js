import React, { Fragment } from "react";
import PropTypes from "prop-types";
import getItemDropInfo from "../../utils/getItemDropInfo";

import mapUserInputEnemyNames from "../../constants/mapUserInput/mapUserInputEnemyNames";
// -----------------------------------------------------------------------------

function BlueprintDropInfo(props) {
  const { internalId } = props;

  // !! If more than one enemy is allowed to drop a single item, change this
  const blueprintInfo = getItemDropInfo({ internalId })[0];

  const isSpecialDrop = blueprintInfo === undefined;

  const enemyDisplayName = isSpecialDrop
    ? "Special drop OR already unlocked"
    : mapUserInputEnemyNames[blueprintInfo.enemyName].NAME;

  return (
    <Fragment>
      <tr>
        <td>Drops from</td>
        <td>{enemyDisplayName}</td>
      </tr>
      {!isSpecialDrop && (
        <tr>
          <td>Drop Chance</td>
          <td>
            {blueprintInfo.dropChance}% ({blueprintInfo.bcRequirement || 0} BC+)
          </td>
        </tr>
      )}
    </Fragment>
  );
}

BlueprintDropInfo.propTypes = {
  internalId: PropTypes.string.isRequired,
};

// -----------------------------------------------------------------------------

export default BlueprintDropInfo;
