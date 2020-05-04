import React, { useState } from 'react';

// -----------------------------------------------------------------------------
function UserInputScreen(props) {
    const [userInputValue, setUserInputValue] = useState("");

    function handleChange(event) {
        // console.log('CHANGING TO', event.target.value);
        // Here, we invoke the callback with the new value
        setUserInputValue(event.target.value);
    }

    function onSubmit() {
        // console.log('CALLING WITH', userInputValue);
        props.onChange(userInputValue);
    }

    return (
        <label>
            Please enter the name of the resource you want:
            <input value={userInputValue} onChange={handleChange} />
            <button onClick={onSubmit}>Submit</button>
            </ label>
      );
}

// -----------------------------------------------------------------------------

export default UserInputScreen;