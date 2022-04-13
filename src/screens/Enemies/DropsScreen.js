import React from "react";
import PropTypes from "prop-types";
import _get from "lodash.get";
import _isEmpty from "lodash.isempty";

// Constants.
import nameMappings from "../../constants/mapUserInput";

// Local modules.
import formatInput from "../../utils/formatInput";
import getDropChance from "../../utils/getDropChance";

// -----------------------------------------------------------------------------

function DropsScreen(props) {
  const { blueprintsDropped } = props;

  const hasDrops = !_isEmpty(blueprintsDropped);

  return (
    <div>
      <h3 className="SubHeader">Drop(s)</h3>
      {hasDrops ? (
        <table>
          <tbody>
            {blueprintsDropped.map((drop) => {
              const minDifficulty = _get(drop, "minDifficulty", 0);
              const blueprintChance = getDropChance({ rarity: drop.rarity });

              return (
                <tr key={`Combo__location${drop.item}`}>
                  <td>
                    {_get(
                      nameMappings,
                      `${formatInput(drop.item)}.NAME`,
                      drop.item,
                    )}
                  </td>
                  <td>
                    {blueprintChance}%
                    {minDifficulty > 0 ? ` (${minDifficulty}+ BC)` : ""}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div className="notFoundWrapper">N/A</div>
      )}
    </div>
  );
}

DropsScreen.propTypes = {
  blueprintsDropped: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string,
      minDifficulty: PropTypes.number,
      rarity: PropTypes.string,
    }),
  ),
};

DropsScreen.defaultProps = {
  blueprintsDropped: [],
};

// -----------------------------------------------------------------------------

export default DropsScreen;
