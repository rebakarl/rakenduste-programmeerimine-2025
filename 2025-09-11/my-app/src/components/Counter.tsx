import { useState } from "react"
import "../App.css"

function Counter() {
  const [count, setCount] = useState(0)

  function increaceCounter(amount: number){
        setCount(count => count + amount)
  }

  return (
    <>
      
      <h1>Vite + React + Karl</h1>
      <div className="card">
        <button onClick={() => increaceCounter(10)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default Counter
