import { useState } from 'react'
import './App.css'

function App() {
  // let [count,setCount] = useState(0);
  // let [name,setName] = useState("");
  let [obj,setObj] = useState({count:0,name:""})

  const increaseCount = () => {
    // count++;
    setObj({count:obj.count + 1})
  }
  return (
    <>
    <input type="text" onChange={e => e.target.value}/> 

      <h1>{obj.name} has clicked {obj.count} times!</h1>
      <button onClick={increaseCount}>Increase</button>
    </>
  )
}

export default App;
