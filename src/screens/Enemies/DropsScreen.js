import React from "react";
import _get from "lodash.get";
import _isEmpty from "lodash.isempty";

// Constants.
import nameMappings from "../../constants/mapUserInput";

// Local modules.
import formatInput from "../../utils/formatInput";
import getDropChance from "../../utils/getDropChance";

// Styles.
import "./DropsScreen.css";

// -----------------------------------------------------------------------------

const cnBase = "DropsScreen";
const cn = {
  noDropsWrapper: `${cnBase}__noDropsWrapper`,
};

const DropsScreen = (props) => {
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
        <div className={cn.noDropsWrapper}>N/A</div>
      )}
    </div>
  );
};

// -----------------------------------------------------------------------------

export default DropsScreen;
