import React from 'react';

const ListWithoutKeys = () => {
  const items = ['item1', 'item2', 'item3'];

  return (
    <ul>
      {items.map(item => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default ListWithoutKeys;
