import React from 'react';
import './App.css'

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <h1 className='text-5xl font-bold py-5 text-center bg-green-500'>
        Vite + React
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
      <div>
        <p className='fixed bottom-0'>[{import.meta.env.MODE}]</p>
      </div>
    </>
  )
}

export default App
