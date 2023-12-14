import { useState } from 'react';
import './App.css';

export default function App() {
  const [enabled, setEnabled] = useState(false);

  function handleClick() {
    document.body.style.backgroundColor = enabled ? 'white' : '#181818';
    setEnabled(!enabled);
  }

  return (
    <div
      className={`toggle-container ${enabled ? 'enabled' : ''}`}
      onClick={handleClick}>
      <div className="toggle-track">
        <div className="toggle-thumb"></div>
      </div>
    </div>
  );
}
