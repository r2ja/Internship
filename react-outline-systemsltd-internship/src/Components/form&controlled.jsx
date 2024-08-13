import React, { useState } from 'react';

function Form() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form>
      <label>
        Input: 
        <input value={inputValue} onChange={handleChange} />
      </label>
      <h2>Value: {inputValue}</h2>
    </form>
  );
}

export default Form;
