import { useState} from "react";
function App() {
let [counter, setCounter] = useState(15);
 //let counter = 15;

 const addValue = () => {
  setCounter(preCounter => preCounter + 1)
  setCounter(preCounter => preCounter + 1)
  setCounter(preCounter => preCounter + 1)
  setCounter(preCounter => preCounter + 1)
 }
 const removeValue = () => {
  setCounter(counter -1);
 }

  return (
    <>
      <h1>Chai or code</h1>
      <h2>Counter value:{counter}</h2>
      <button type="button" onClick={addValue} className="bg-black text-white rounded-xl py-4">Add Value{counter}</button>
      <br/>
      <br/>
      <button type="button" onClick={removeValue} className="bg-black text-white rounded-xl py-4">Remove Value{counter}</button>
      <p>{counter}</p>
    
    </>
  )
}

export default App
