import React from 'react';

// -----------------------------------------------------------------------------

function BasicDisplay(props) {
    const {
        name, value
    } = props;

    return (
        <div>
            {name}: {value}
        </div>
    );
}

// -----------------------------------------------------------------------------

export default BasicDisplay;
