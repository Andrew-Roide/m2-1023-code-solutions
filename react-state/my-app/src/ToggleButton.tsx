import { useState } from 'react';

type Props = {
  text: string;
  color: string;
};

export default function ToggleButton({ text, color }: Props) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('the value is:', isClicked);

  const buttonStyle = {
    backgroundColor: isClicked ? 'red' : color,
  };

  function handleClick() {
    console.log('the value in handleClick before:', isClicked);
    setIsClicked(!isClicked);
    console.log('the value in handleClick after:', isClicked);
  }

  return (
    <>
      <button onClick={handleClick} style={buttonStyle}>
        {text}
      </button>
    </>
  );
}
