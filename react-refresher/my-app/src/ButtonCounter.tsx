import { useState } from 'react';

export default function ButtonCounter() {
  const [count, setNumber] = useState(0);

  function handleIncrement() {
    setNumber(count + 1);
  }

  function handleDecrement() {
    setNumber(count - 1);
  }
  return (
    <>
      <button onClick={handleDecrement}>Down</button>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Up</button>
    </>
  );
}
