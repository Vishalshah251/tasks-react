import React from 'react';
import { useGlobalContext } from './Context';

const Pages = () => {
  const { page,nbPages,handlePrev,handleNext } = useGlobalContext();
  
  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <p>{page} for {nbPages}</p>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pages;
