import { useCallback, useState } from 'react'
import classes from './Counter.modules.scss'

export const Counter = () => {

  const [count, setCounter] = useState(0)

  const increment = useCallback(() => {
    setCounter(val => val + 1)
  }, [])

  const decrement = useCallback(() => {
    setCounter(val => val - 1)
  }, [])

  return (
    <div>
      <h1 className={classes.title}>{count}</h1>
      <button onClick={increment}>Увеличить</button>
    </div>
  )
}

