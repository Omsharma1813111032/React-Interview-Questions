import './App.css'
import {Routes,Route} from "react-router-dom"
import CheckboxQuestion from './components/CheckboxQuestion.jsx'
import Home from './Page/Home.jsx'
import DropDownQuestion from './components/DropDownQuestion.jsx'
import SumExceptThatIndex from './components/SumExceptThatIndex.jsx'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/question1" element={<CheckboxQuestion/>} />
        <Route path="/question2" element={<DropDownQuestion/>} />
        <Route path="/question3" element={<SumExceptThatIndex/>} />
      </Routes>
    </>
  )
}

export default App
