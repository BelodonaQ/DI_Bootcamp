import React, { useEffect, useState } from 'react';

function Color() {
  const [favoriteColor, setFavoriteColor] = useState('red');

  useEffect(() => {
    alert('useEffect reached');
  }, []);

  const changeColor = () => {
    setFavoriteColor('blue');
  };

  return (
    <div>
      <h3>My favorite color is {favoriteColor}</h3>
      <button onClick={changeColor}>Change color to blue</button>
    </div>
  );
}

export default Color;
