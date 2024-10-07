import React from 'react'

const EventHandling = () => {

    const handleButtonClick = () => {
        alert("onclick event handling")
    }
    return (
        <>
            <button onClick={handleButtonClick}>Click Me</button>
            <br />
            <button onClick={handleButtonClick}>Click Me 2</button>
        </>
    )
}

export default EventHandling