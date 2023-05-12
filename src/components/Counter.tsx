import React from 'react';

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="py-10">
      <h1 className="text-7xl text-center my-auto py-10">Count: {count}</h1>
      <div className="text-center py-10">
        <button
          type="button"
          className="btn bg-red-500 mx-2 text-white"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
        <button
          type="button"
          className="btn bg-blue-500 mx-2 text-white"
          onClick={() => setCount(0)}
        >
          0
        </button>
        <button
          type="button"
          className="btn bg-green-500 mx-2 text-white"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
