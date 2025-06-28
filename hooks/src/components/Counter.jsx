import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>Counter : {counter}
            <br />
            <br />
            <button onClick={() => setCounter(counter + 1)}>Increase</button>
            <button onClick={() => counter > 0 ? setCounter(counter - 1) : alert("value not decrease below 0")}>Decrease</button>
        </div>

    )
}

export default Counter;

