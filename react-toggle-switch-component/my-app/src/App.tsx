import { useState } from 'react';
import './App.css';

export default function App() {
  const [enabled, setEnabled] = useState(false);
  const modifiedText = enabled ? 'on' : 'off';
  const fontColor = {
    color: modifiedText === 'on' ? 'white' : 'black',
  };

  function handleClick() {
    document.body.style.backgroundColor = enabled ? 'white' : '#181818';
    setEnabled(!enabled);
  }

  return (
    <>
      <div
        className={`toggle-container ${enabled ? 'enabled' : ''}`}
        onClick={handleClick}>
        <div className="toggle-track">
          <div className="toggle-thumb"></div>
        </div>
      </div>
      <div className="button-label" style={fontColor}>
        {modifiedText}
      </div>
    </>
  );
}
