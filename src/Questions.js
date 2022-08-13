import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const Question = (props) => {
    const {title,info,index} = props
  const [position, setPosition] = useState(null)


  const toggle = (index) => {
    if (position === index) {
      return setPosition(null)
    }
    setPosition(index)

  }

  return (
    <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={toggle(index)}>{position === index ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
    </header>
    {position === index && <p>{info}</p>}
  </article>
);
};

export default Question;
