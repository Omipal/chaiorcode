import React, { useMemo, useState} from 'react';

const Memo = () => {
const [counter, setCounter] = useState(0);
const [counterTwo, setCounterTwo] = useState(0);



const incrementOne = () => {
    setCounter(counter + 1)
};
const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
}
const isEven = useMemo(() => {
    console.warn("..........")
    let i = 0;
    while (i < 200000000) {
        i++
    }
    return counter % 2 === 0
}, [counter])


  return (
    <div className=' text-center'>
        <button className=' bg-black py-5 text-white rounded-xl mb-5' onClick={incrementOne}>Counterone - {counter}</button><br/>
        <span>{isEven? "Even": "odd"}</span><br/>
        <button className=' bg-black py-5 text-white rounded-xl' onClick={incrementTwo}>Countertwo - {counterTwo}</button>
    </div>
  )
}

export default Memo;