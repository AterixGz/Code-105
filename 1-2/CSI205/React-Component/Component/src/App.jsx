import { useState } from 'react'
import './App.css'
import Counter from './Counter/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Counter name='Number' value={10}/>
    </div>
  )
}

export default App
