import {useState} from 'react';
import './App.css'


function App() {
  let [counter,setCounter] = useState(5);

  // let counter = 5;

  const addValue = () => {
    // counter = counter + 1;
    if(counter >= 10) alert('Can\'t its\'s maximum i.e, 10');
    else setCounter(counter + 1);
    // console.log("value added",counter);
  }

  const deleteValue = () => {
    // counter = counter - 1;
    if(counter<=0) alert('Can\'t its negative');
    else setCounter(counter - 1);
    // console.log("value deleted",counter);
  }
  return (
    <>
     <h1>Counter App</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value {counter}</button>
     <br/>
     <button onClick={deleteValue}>Remove value {counter}</button>
     <p>Footer : {counter}</p>
    </>
  )
}

export default App;
