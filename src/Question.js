import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info }) => {
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <article className='question'>
      <header >
        <h4>{title}</h4>
        <button className='btn' onClick={() => setToggleOpen(!toggleOpen)}>{toggleOpen ? `-` : `+`}</button>
      </header>
        <p>{toggleOpen ? info : ``} </p>
    </article>
  )
};

export default Question;
