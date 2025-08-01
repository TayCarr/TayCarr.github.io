import { useState } from 'react'
import Delta1 from './assets/delta1.jpeg'
import Delta2 from './assets/delta2.jpeg'
import Delta3 from './assets/delta3.jpeg'
import Delta4 from './assets/delta4.jpeg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        
      </div>
      <h1>Taylor Carreiro</h1>
      <p>Hello my name is Taylor, I am a recent comp sci grad and this site will be ummm whatever I want... Things will flow and maybe not make sense for a bit but eventually it will be me!</p>
      <h2>Delta Dawn</h2>
      <p>This is Delta she is 11 years old as of July 27 2025. I love her so so so much she is my world my rotten goblin girl.</p>
      <div className='delta-gallery'>
        <img src={Delta1} alt="Delta1" />
        <img src={Delta2} alt="Delta2" />
        <img src={Delta3} alt="Delta3" />
        <img src={Delta4} alt="Delta4" />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
