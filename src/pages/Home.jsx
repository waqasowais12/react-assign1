import React, { useState, useEffect } from 'react';
import Button from '../components/Button';

function Home() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted or Updated");
  }, [count]);

  const incrementCount = () => setCount(count + 1);

  return (
    <div className="container">
      <h1>Welcome to the Home Page</h1>
      <p>Current Count: {count}</p>
      <Button text="Increment" onClick={incrementCount} />
    </div>
  );
}

export default Home;
