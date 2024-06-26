import React, { useEffect, useState } from 'react';
import MousePosition from './MousePosition';

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [display, setDisplay] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isFlashing, setIsFlashing] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("Hello");
  }, [count]);

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && isRunning) {
      flashBackground();
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer, isRunning]);

  const flashBackground = () => {
    setIsFlashing(true);
    setTimeout(() => {
      setIsFlashing(false);
    }, 1000);
  };

  const handleTimerChange = (e) => {
    if (!isRunning) {
      setTimer(parseInt(e.target.value, 10) || 0);
    }
  };

  const startOrResetTimer = () => {
    if (isRunning) {
      setTimer(0);
      setIsRunning(false);
    } else {
      setIsRunning(true);
    }
  };

  return (
    <>
      <div
        className={`mt-5 ml-5 w-[30vw] h-auto p-6 rounded-lg flex flex-col items-center justify-center shadow-lg ${isFlashing ? 'bg-red-500' : 'bg-sky-200'}`}
      >
        <h1 className="text-center text-xl font-bold mb-4">UseEffect</h1>
        <div className="bg-white p-8 rounded shadow-lg flex flex-col items-center w-full max-w-md mb-4">
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-blue-100 p-2 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
            <button
              onClick={() => setCount(count + 1)}
              className="bg-blue-500 text-white p-2 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Clicked {count} times
            </button>
          </div>
        </div>
        <p className="font-semibold text-xl mb-4">
          Mouse Position:&nbsp;&nbsp;
          <button
            onClick={() => setDisplay(!display)}
            className={`text-white px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 mb-4 ${
              display ? 'bg-red-500 focus:ring-red-500' : 'bg-green-500 focus:ring-green-500'
            }`}
          >
            {display ? "Off" : "On"}
          </button>
        </p>
        {display && (
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg flex items-center justify-center w-full max-w-md mb-4">
            <MousePosition />
          </div>
        )}
        <div className={`p-4 rounded-lg shadow-lg w-full max-w-md mb-4 ${isRunning ? 'bg-red-100' : 'bg-slate-500'}`}>
          <label htmlFor="timer" className="block text-gray-700 font-semibold mb-2">Set Timer:</label>
          <div className="flex items-center">
            <input
              type="text"
              value={timer}
              onChange={handleTimerChange}
              id="timer"
              className="w-16 h-16 bg-white border rounded text-center focus:outline-none focus:ring-2 focus:ring-orange-500"
              disabled={isRunning}
            />
            <button
              onClick={startOrResetTimer}
              className={`ml-4 px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 ${
                isRunning ? 'bg-red-500 focus:ring-red-500 text-white' : 'bg-green-500 focus:ring-green-600 text-white'
              }`}
            >
              {isRunning ? "Reset" : "Start"}
            </button>
          </div>
          <div className="mt-2 text-gray-700 font-semibold">Timer: {timer}</div>
        </div>
      </div>
    </>
  );
}

export default UseEffectHook;
