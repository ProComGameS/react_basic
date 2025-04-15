import { useState } from 'react'
import Input from './components/Input.jsx';
import Button from './components/Button.jsx';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
    const [copyText, setText] = useState('')

  return (
    <>
      <div>
        <h1>Реалізовані React компоненти</h1>

          <Input placeholder="Тут можна ввести щось" onChange={(event) => setText(event.target.value)} value={copyText}></Input>

          <Button text="А потім натиснути тут" onClick={() => alert(`Ось текст: ${copyText}`)}></Button>


      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>

        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
