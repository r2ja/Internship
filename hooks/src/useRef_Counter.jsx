import React, { useState, useRef } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementButtonRef = useRef(null);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const focusIncrementButton = () => {
    incrementButtonRef.current.focus();
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Count: {count}</h2>
      <div className="space-x-2">
        <button
          ref={incrementButtonRef}
          onClick={increment}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
        <button
          onClick={focusIncrementButton}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Focus Increment Button
        </button>
      </div>
    </div>
  );
};

export default Counter;