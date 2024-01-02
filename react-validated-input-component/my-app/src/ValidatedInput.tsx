import { useState } from 'react';
import { FcCheckmark, FcCancel } from 'react-icons/fc';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  function handleInputChange(e) {
    const inputValue = e.target.value;
    setPassword(inputValue);
  }

  function isPasswordValid() {
    if (!password) {
      return { symbol: <FcCancel />, text: 'A password is required' };
    } else if (password.length < 8) {
      return {
        symbol: <FcCancel />,
        text: 'Password must be at least 8 characters',
      };
    } else {
      return { symbol: <FcCheckmark />, text: '' };
    }
  }

  const { symbol, text } = isPasswordValid();

  return (
    <div className="password">
      <label htmlFor="password">Password</label>
      <div className="input-symbol">
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        {symbol}
      </div>
      <div className="text">{text}</div>
    </div>
  );
}
