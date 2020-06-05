import React from "react";
import _get from "lodash.get";
import _isEmpty from "lodash.isempty";

// Constants.
import nameMappings from "../../constants/mapUserInput";

// Local modules.
import formatInput from "../../utils/formatInput";
import blueprintDrops from "../../utils/jsonImports/blueprintDropJsons";

// Styles.
import "./DropsScreen.css";

// -----------------------------------------------------------------------------

const cnBase = "DropsScreen";
const cn = {
  noDropsWrapper: `${cnBase}__noDropsWrapper`,
};

const DropsScreen = (props) => {
  const { userInput } = props;

  const blueprintsDropped = _get(userInput, "enemyJson.blueprints");
  const hasDrops = !_isEmpty(blueprintsDropped);

  return (
    <div>
      <h3 className="SubHeader">Drop(s)</h3>
      {hasDrops ? (
        <table>
          <tbody>
            {blueprintsDropped.map((drop) => {
              const minDifficulty = _get(drop, "minDifficulty", 0);
              const blueprintChance = (
                _get(blueprintDrops, `${drop.rarity}.chance`) * 100
              )
                .toFixed(2)
                .replace(/\.0+$/, "");

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
