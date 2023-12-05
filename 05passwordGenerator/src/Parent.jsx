import React, {useCallback, useState} from 'react';
import Child from './Child';

const Parent = () => {
const [counter, setCounter] = useState(0);
const [counterTwo, setCounterTwo] = useState([]);      
const incrementOne = () => {
    setCounter(counter + 1)
};
const func = useCallback(() => {
    console.log("hallo om");
}, [counterTwo]) 
  return (
    <div>
        <Child counterTwo={counterTwo} func={func}/>
        <button className=' bg-black py-5 text-white rounded-xl mb-5' onClick={incrementOne}>Counterone - {counter}</button><br/>
    </div>
  )
}

export default Parent;