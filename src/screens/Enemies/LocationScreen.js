import React from "react";

// Local modules.
import enemyLocation from "../../utils/enemyLocation";

// -----------------------------------------------------------------------------

const LocaationScreen = (props) => {
  const { userInput } = props;

  const enemyBiomeLocations = enemyLocation({ enemy: userInput });

  return (
    <div>
      <h3 className="SubHeader">Location(s)</h3>
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
    </div>
  );
};

// -----------------------------------------------------------------------------

export default LocaationScreen;
