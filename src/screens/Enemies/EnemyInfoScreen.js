import React from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";

// Local modules.
import BasicDisplay from "../../components/common/basicDisplay";

// -----------------------------------------------------------------------------

function EnemyInfoScreen(props) {
  const { enemyJson } = props;

  return (
    <div>
      <h3 className="SubHeader">Enemy Info</h3>
      <table>
        <tbody>
          <BasicDisplay
            name="Base HP"
            value={_get(enemyJson, "life[0]") || _get(enemyJson, "life")}
          />
          <BasicDisplay
            name="Is Trash Mob?"
            value={_get(enemyJson, "props.isTrashMob") ? "Yes" : "No"}
          />
          <BasicDisplay
            name="From DLC?"
            value={_get(enemyJson, "dlc") || "No"}
          />
        </tbody>
      </table>
    </div>
  );
}

EnemyInfoScreen.propTypes = {
  enemyJson: PropTypes.shape({
    blueprints: PropTypes.arrayOf(
      PropTypes.shape({ rarity: PropTypes.string }),
    ),
    life: PropTypes.arrayOf(PropTypes.number),
  }),
};

EnemyInfoScreen.defaultProps = {
  enemyJson: {},
};

// -----------------------------------------------------------------------------

export default EnemyInfoScreen;
