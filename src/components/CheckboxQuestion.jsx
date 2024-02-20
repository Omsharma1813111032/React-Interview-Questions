import { useState } from "react"

const arr = ["Play Cricket","Play Video Game","Read Book"]

const CheckboxQuestion = () => {

  const [data,setData] = useState(arr)

  const [check,setCheck] = useState(false)

  const handleDelete = (ar) =>{
    setData(data.filter(dt=>dt!==ar))
  }

  const handleCheck = ()=>{

      if(!check){
        setCheck(true)
      }else{
        setCheck(false)
      }
  }

// iska solution y hi h ki utne state banao jitne no of elements h array

  return (
    <>
    <ul>
        { 
          data.length>0 ? 
          data.map((ar,index)=>(
            <li key={index} style={{listStyle:"none"}}>
              <input type="checkbox" value={check} onClick={()=>{handleCheck()}} />
              {ar}
              {
                check ? <button onClick={()=>{handleDelete(ar)}}>Delete</button> : ""
              }
              
            </li>

          ))
          : <h5>No Data</h5>
        }
    </ul>
    </>
  )
}

export default CheckboxQuestion