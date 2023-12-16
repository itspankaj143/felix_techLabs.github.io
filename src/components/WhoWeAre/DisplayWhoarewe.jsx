import React, { useState } from 'react'
import Whoarewe1 from './Whoarewe1'
import Whoarewe2 from './Whoarewe2'

const DisplayWhoarewe = () => {
  const [display,setDisplay] = useState('one');

const handleclick = () => {
  if(display === 'one'){
    setDisplay('two');
  }
  else if(display === 'two'){
    setDisplay('one');
  }
}

  return (
    <>
    {
      display==='two'? <Whoarewe2 click={handleclick}/> : <Whoarewe1 click={handleclick}/> 
    }
    </>
  )
}

export default DisplayWhoarewe;