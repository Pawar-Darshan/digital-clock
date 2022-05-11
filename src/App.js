import './App.css';
import React, { useState } from 'react';

function App() {

  let time = new Date().toLocaleTimeString();

  const [curTime, setTime] = useState(time);

  const UpdateTime = () => {
    let time = new Date().toLocaleTimeString();
    setTime(time);
  }


  setInterval(UpdateTime, 1000);
  return (
    <div className="App">
      <h1 className="OwnerName">It's Darshan's Digital Watch</h1>
      <h1 className='currentTime'>{curTime}</h1>
    </div>
  );
}


export default App;
