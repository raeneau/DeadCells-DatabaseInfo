import React, { useContext } from "react";
import PropTypes from "prop-types";
import _isEmpty from "lodash.isempty";
import _get from "lodash.get";
import _map from "lodash.map";

// Local modules.
import EnemyContext from "../../context/EnemyContext";
import mapUserInputBiomeNames from "../../constants/mapUserInput/mapUserInputBiomeNames";
import formatDifficulty from "../../utils/formatBossCellDifficulty";

// -----------------------------------------------------------------------------

const LocationScreen = (databaseInfo) => {
  const allEnemyData = useContext(EnemyContext);
  const { userInput } = databaseInfo;

  const enemyId = _get(userInput, "enemyJson.id");
  const isTrashMob = _get(userInput, "enemyJson.props.isTrashMob");
  const { [enemyId]: enemyBiomeData } = allEnemyData;

  return (
    <div>
      <h3 className="SubHeader">Location(s)</h3>
      {!_isEmpty(enemyBiomeData) ? (
        <table>
          <tbody>
            {_map(enemyBiomeData, (location, key) => {
              const { minDifficulty, maxDifficulty } = location;
              const biome = mapUserInputBiomeNames[String(key).toUpperCase()];

              return (
                <tr key={`Combo__location${biome.INTERNAL_ID}`}>
                  <td>{biome.NAME}</td>
                  <td>{formatDifficulty({ minDifficulty, maxDifficulty })}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <>
          <div className="notFoundWrapper">N/A</div>
          <div className="notFoundWrapper">
            ({isTrashMob ? "spawned by another mob" : "is a boss or mini-boss"})
          </div>
        </>
      )}
    </div>
  );
};

LocationScreen.propTypes = {
  userInput: PropTypes.shape({
    enemyJson: PropTypes.shape({
      props: PropTypes.shape({
        isTrashMob: PropTypes.bool,
      }),
    }),
  }).isRequired,
};

// -----------------------------------------------------------------------------

export default LocationScreen;
