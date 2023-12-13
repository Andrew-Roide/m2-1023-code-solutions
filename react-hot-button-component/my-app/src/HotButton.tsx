import { useState } from 'react';

type Props = {
  color: string;
};

export default function HotButton({ color }: Props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 3);
  }

  if (count <= 3) {
    color = '#6a329f';
  } else if (count <= 6) {
    color = '#6666A3';
  } else if (count <= 9) {
    color = '#e06666';
  } else if (count <= 12) {
    color = '#e69138';
  } else if (count <= 15) {
    color = '#ffd966';
  } else {
    color = '#ffffff';
  }

  return (
    <div>
      <button onClick={handleClick} style={{ backgroundColor: color }}>
        Hot Button
      </button>
      <p>{count}</p>
    </div>
  );
}
