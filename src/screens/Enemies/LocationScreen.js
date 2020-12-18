import React from "react";
import _isEmpty from "lodash.isempty";
import _get from "lodash.get";

// Local modules.
import enemyLocation from "../../utils/enemyLocation";

// -----------------------------------------------------------------------------

const LocaationScreen = (props) => {
  const { userInput, databaseVersion } = props;

  const enemyBiomeLocations = enemyLocation({
    enemy: userInput,
    databaseVersion,
  });
  const isTrashMob = _get(userInput, "enemyJson.props.isTrashMob");

  return (
    <div>
      <h3 className="SubHeader">Location(s)</h3>
      {!_isEmpty(enemyBiomeLocations) ? (
        <table>
          <tbody>
            {enemyBiomeLocations.map((location) => (
              <tr key={`Combo__location${location.name}`}>
                <td>{location.name}</td>
                <td>{location.difficulty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <div className="notFoundWrapper">N/A</div>
          <div className="notFoundWrapper">
            ({isTrashMob ? "spawned by another mob" : "is a boss"})
          </div>
        </>
      )}
    </div>
  );
};

// -----------------------------------------------------------------------------

export default LocaationScreen;
