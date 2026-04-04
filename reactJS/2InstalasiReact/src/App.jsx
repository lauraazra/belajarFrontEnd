import { useState } from 'react'
import Header from './components/Header'

function App() {
  const students = ['Alvar', 'Azra', 'Pradipta']
  const [likes, setLikes] = useState(0)

  function handleClick() { 
      setLikes(likes+1)
  }

  return(
      <div>
          <Header />
          <Header name="WPU" />
          <Header name="Azra" />

          <ul>
              {students.map((student) => (
                  <li key={student}>{student}</li>
              ))}
          </ul>

          <button onClick={handleClick}>Like ({likes})</button>
      </div>
      
  )
}

export default App
