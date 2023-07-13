import React from 'react'
import { useState } from 'react'

let name = "Hazar"

function MyButton() {
const [name, setName] = useState("Hazar")

    function buttonClicked(){
      if(name == "Hazar"){
      setName("Imen")}
      else{ 
        setName("Hazar")
      }
      }
  return (
    <div>
      <button onClick={buttonClicked}>Click Me</button>
       <h1>{name}</h1>
    </div>
  )
}


export default MyButton
