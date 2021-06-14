import React, { useState } from 'react'

const CounterApp = ({valor}) => {

    const [counter, setCounter] = useState(valor)

    const handlerIncrement=()=>{
        setCounter(counter + 1)
    }

    const handlerDecrement=()=>{
        setCounter(counter - 1)
    }

    const handlerReset=()=>{
        setCounter(valor)
    }

    return (
        <div>
            <h1>Counter App</h1>
            <hr/>
            <p>{counter}</p>

            {/* <button onClick={()=>setCounter(counter + 1)}>+1</button> */}
            <button onClick={handlerIncrement}>+1</button>
            <button onClick={handlerReset}>Reset</button>
            <button onClick={handlerDecrement}>-1</button>
        </div>
    )
}

export default CounterApp
