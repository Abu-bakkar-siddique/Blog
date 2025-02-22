// pages/counter/index.tsx

'use client'
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Counter: {count}</h1>
      <div className="space-x-4">
        <button
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
          onClick={increment}
        >
          Increment
        </button>
        <button
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
