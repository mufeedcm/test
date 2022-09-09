import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center  text-center reletive ">
      <div className='absolute bg-[#F39682] top-[40%] p-5 rounded-xl text-wh'>
      <h1>counter</h1>
      <div className="">
        <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <h1>count is {count}</h1>
        </div>
      </div>
    </div>
  )
}

export default App
