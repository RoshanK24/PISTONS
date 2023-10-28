import { Routes, Route } from "react-router-dom"
import Homepage from "./components/Pages/HomePage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/> 
      </Routes>
    </>
  )
}

export default App
