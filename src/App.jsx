import './App.css'
import {Routes,Route} from "react-router-dom"
import CheckboxQuestion from './components/CheckboxQuestion.jsx'
import Home from './Page/Home.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/question1" element={<CheckboxQuestion/>} />
      </Routes>
    </>
  )
}

export default App
