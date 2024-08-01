import { useState } from 'react'
import { Info } from './Info'

function App() {
  const [count, setCount] = useState(0)
  const [details, Setdetails] = useState(Info.map(()=>false))

  const Add = () =>{
    if(count < Info.length-1){
      setCount(count+1)
    }
  }

  const Previous = () =>{
    if(count > 0){
      setCount(count-1)
    }
  }

 function Details(){
  const info = [...details]
  info[count] = !info[count]
  let lol = [...details]
  console.log(lol);
  Setdetails(info)
 }
    const Value = Info[count]
  return (
    <>
   
     <button onClick={Add}>Next</button>
    <button onClick={Previous}>Previous</button>

     <h1>{Value.name}</h1>
     <h2> By {Value.artist}</h2>
     <img src={Value.url}/>
     <br></br>
     <button onClick={Details}>{details[count]?'hide':'show'}</button>
     <p>{details[count] && Value.description}</p>

    </>
  )
}

export default App
