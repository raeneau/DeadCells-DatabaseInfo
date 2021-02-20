import React from "react";
import _isEmpty from "lodash.isempty";
import _get from "lodash.get";

import getBiomeEnemies from "../../utils/getBiomeEnemies";

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
            {enemiesWithDifficulties.map((enemy) => (
              <tr key={`Enemies__enemy${enemy.name.NAME}`}>
                <td>{enemy.name.NAME}</td>
                <td>{enemy.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <div className="notFoundWrapper">N/A</div>
        </>
      )}
    </div>
  );
};

// -----------------------------------------------------------------------------

export default Enemies;
