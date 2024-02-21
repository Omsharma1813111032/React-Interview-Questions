import './App.css'
import {Routes,Route} from "react-router-dom"
import CheckboxQuestion from './components/CheckboxQuestion.jsx'
import Home from './Page/Home.jsx'
import DropDownQuestion from './components/DropDownQuestion.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/question1" element={<CheckboxQuestion/>} />
        <Route path="/question2" element={<DropDownQuestion/>} />
      </Routes>
    </>
  )
}

export default App
