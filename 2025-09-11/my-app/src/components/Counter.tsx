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
        <div style={{ marginBottom: "1rem" }}>
          <span>count is {count}</span>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          <button onClick={() => increaceCounter(100)}>+100</button>
          <button onClick={() => increaceCounter(50)}>+50</button>
          <button onClick={() => increaceCounter(25)}>+25</button>
          <button onClick={() => increaceCounter(1)}>+1</button>
          <button onClick={() => increaceCounter(-1)}>-1</button>
          <button onClick={() => increaceCounter(-25)}>-25</button>
          <button onClick={() => increaceCounter(-50)}>-50</button>
          <button onClick={() => increaceCounter(-100)}>-100</button>
        </div>
      </div>
    </>
  )
}

export default Counter
