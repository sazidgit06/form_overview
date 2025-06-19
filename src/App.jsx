import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Components/SimpleForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>Hello i'm sazid</h3>
      <p>Today i'm learning about form submitting in react!</p>
      <SimpleForm></SimpleForm>
    </>
  )
}

export default App
