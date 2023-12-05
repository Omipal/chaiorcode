import React, {memo} from 'react';

const Child = ({counterTwo, setCounterTwo}) => {
 console.log("child component render");   
  return (
    <div>Child Component</div>
  )
}

export default memo(Child);