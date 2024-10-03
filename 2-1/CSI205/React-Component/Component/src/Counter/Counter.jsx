import './Counter.css'
import React from 'react'
import { useState } from 'react'

function Counter(props) {
    const [value, setValue] = React.useState(props.value)
    
    return (
        <div className="counter">
            <h2>{props.name}</h2>
            <button className='btnminus' onClick={() => setValue(value - 1)}>-</button>
            <span>{value}</span>
            <button className='btnplus' onClick={() => setValue(value + 1)}>+</button>
        </div>
    )
}

export default Counter
