import React from 'react';
import './App.css'

function App() {
  console.log(`Running in '${import.meta.env.MODE}' mode`);
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1 className='text-5xl font-bold py-5 text-center bg-green-500'>
        Vite + React + Tailwind
      </h1>
      <h1 className='text-7xl py-10 text-center my-auto'>
        Count: {count}
      </h1>
      <div className='text-center'>
        <button className='btn bg-green-500 mx-2 text-white' onClick={() => setCount((count) => count + 1)}>
          +
        </button>
        <button className='btn bg-red-500 mx-2 text-white' onClick={() => setCount((count) => count - 1)}>
          -
        </button>
      </div>
    </>
  )
}

export default App
