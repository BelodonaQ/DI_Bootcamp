import React, { useState } from 'react';

function Events() {
  const [isToggleOn, setIsToggleOn] = useState(true);

  const clickMe = () => {
    alert('I was clicked');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  const toggle = () => {
    setIsToggleOn((previousValue) => !previousValue);
  };

  return (
    <div className="events-layout">
      <button onClick={clickMe}>Click me</button>

      <label>
        Type something and press Enter
        <input
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Type here..."
        />
      </label>

      <button onClick={toggle}>{isToggleOn ? 'ON' : 'OFF'}</button>
    </div>
  );
}

export default Events;
