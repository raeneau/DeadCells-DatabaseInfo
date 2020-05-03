import React from 'react';

// -----------------------------------------------------------------------------

function BasicDisplay(props) {
    const {
        name, value
    } = props;

    return (
        <div>
            {name}: {value !== undefined ? value : 'N/A'}
        </div>
    );
}

// -----------------------------------------------------------------------------

export default BasicDisplay;
