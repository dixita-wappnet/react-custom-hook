import './App.css';
import React from 'react';
import useCustomCounter from "./components/Custom";

function App() {
  const data = useCustomCounter(1);

  return (
    <React.Fragment>
      <h1>Counter: {data}</h1>
      <button type='button' onClick={data[1]}>Increment</button>
     
    </React.Fragment>
  )
}

export default App;
