import React from 'react';
import Grandparent from './components/grandparent';
import { CounterProvider } from './context/counterContext';
import useFetch from './components/useFetch'

function DataDisplayComponent(url) {
  const { data, loading, error } = useFetch(url)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  // console.log("Error", data);

  return <div>{JSON.stringify(data, null, 2)}</div>
}

function App() {
  return (
    <>
      <CounterProvider>
        <Grandparent />
      </CounterProvider>

      <div>
        {DataDisplayComponent("https://jsonplaceholder.typicode.com/todos")}
      </div>

    </>
  );
}

export default App;
