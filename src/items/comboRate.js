import React from 'react';
import _get from 'lodash.get';

// -----------------------------------------------------------------------------

function ComboRate(props) {
    const {
        array, 
    } = props;

    const totalComboCount = array.length;

    const comboRate = array.reduce(function(accumulator, element, index){
        const charge = _get(element, 'charge', 0);
        const cooldown = _get(element, 'cooldown', 0);
        const lockControlAfter = _get(element, 'lockCtrlAfter', 0);

        return accumulator + (charge + cooldown + lockControlAfter);
    }, 0);

    return (
        <div>
            Combo Rate: One {
                    totalComboCount < 2 
                    ? ' hits'
                    : `${totalComboCount}-hit combo`
                } every {comboRate.toFixed(2)} seconds
        </div>
    );
}

// -----------------------------------------------------------------------------

export default ComboRate;
