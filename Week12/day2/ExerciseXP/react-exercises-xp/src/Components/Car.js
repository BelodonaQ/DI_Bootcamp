import React, { useState } from 'react';
import Garage from './Garage';

function Car({ carInfo }) {
  const [color] = useState('red');

  return (
    <div>
      <h3>
        This car is {color} {carInfo.model}.
      </h3>
      <p>Brand: {carInfo.name}</p>
      <Garage size="small" />
    </div>
  );
}

export default Car;
