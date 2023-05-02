import React from "react";
import PropTypes from "prop-types";
import _isEmpty from "lodash.isempty";
import _get from "lodash.get";

import getBiomeEnemies from "../../utils/getBiomeEnemies";
import mapUserInputBiomeNames from "../../constants/mapUserInput/mapUserInputBiomeNames";
import formatInput from "../../utils/formatInput";

// -----------------------------------------------------------------------------

const Enemies = (props) => {
  const { userInput } = props;

  // TODO: This aint an item json
  const jsonMobsArray = _get(userInput, "itemJson.mobs", []);

  const enemiesWithDifficulties = getBiomeEnemies({ jsonMobsArray });

  return (
    <div>
      <h3 className="SubHeader">Enemies</h3>
      {!_isEmpty(enemiesWithDifficulties) ? (
        <table>
          <tbody>
            {enemiesWithDifficulties.map((enemy) => {
              // Retrieve the required biome (for undying shores) and format the name
              const requiredLevel = _get(
                mapUserInputBiomeNames[
                  formatInput(_get(enemy, "requiredLevel", ""))
                ],
                "NAME",
                undefined,
              );
              const name = _get(enemy, "name.NAME", "");

              return (
                <tr key={`Enemies__enemy${name}`}>
                  <td>
                    <span>{name}</span>
                    {requiredLevel && <i> (Visited {requiredLevel})</i>}
                  </td>
                  <td>{enemy.difficulty}</td>
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
};

Enemies.propTypes = {
  userInput: PropTypes.shape({
    itemJson: PropTypes.shape({
      mobs: PropTypes.shape({
        mob: PropTypes.string.isRequired,
        minDifficulty: PropTypes.number,
      }),
    }),
  }).isRequired,
};

// -----------------------------------------------------------------------------

export default Enemies;
