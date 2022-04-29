import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount
} from '../slice/counterSlice'

export function EjemRedux() {

    /* return(
        <div>ll</div>
    ) */
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(2)
  const [numPausado, setNumPausado] = useState(4)

  const pausado = () =>{
    console.log('hola')

    
    setTimeout(() => {
      dispatch(incrementByAmount(Number(numPausado) || 0))
    }, 1000);
  }

  return (
    <div>
      <div >
        <button
          
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>

        <span >
          {count}
        </span>

        <button
          
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>

      </div>

      <div >
        <input
          
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />

        <button
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
       
      </div>

      <div>

        <input
          value={numPausado}
          onChange={(e) => setNumPausado(e.target.value)}
        />

        <button
          onClick={pausado}>
          Añadir con pausa
        </button>

      </div>
    </div>
  )
}