import React from 'react';
import _get from 'lodash.get';

// -----------------------------------------------------------------------------

function ComboRate(props) {
    const {
        array, 
    } = props;

    const totalComboCount = array.length;
    const durationByHit = [];

    const comboRate = array.reduce(function(accumulator, element, index){
        const charge = _get(element, 'charge', 0);
        const cooldown = _get(element, 'cooldown', 0);
        const lockControlAfter = _get(element, 'lockCtrlAfter', 0);

        const durationForCurrentHit = (charge + cooldown + lockControlAfter);

        durationByHit.splice(index, 0, durationForCurrentHit.toFixed(2));

        return accumulator + (durationForCurrentHit);
    }, 0);

    const durationPerHit = durationByHit.map((element, index) =>
        <li key={`Hit_${index+1}`}>Hit {index+1}: {element}</li>
    );

    return (
        <div>
            <span>
                Combo Rate: One {
                    totalComboCount < 2 
                    ? ' hits'
                    : `${totalComboCount}-hit combo`
                } every {comboRate.toFixed(2)} seconds
            </span>
            {durationPerHit}
        </div>
    );
}

// -----------------------------------------------------------------------------

export default ComboRate;
