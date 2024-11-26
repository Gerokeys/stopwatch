import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Stopwatch</h1>
      <div className="text-4xl font-mono mb-6 bg-white shadow-lg px-6 py-3 rounded-lg">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="flex gap-4">
        <button
          className={`px-6 py-2 text-white font-medium rounded-md transition ${
            running
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
          onClick={() => setRunning(!running)}
        >
          {running ? "Stop" : "Start"}
        </button>
        <button
          className="px-6 py-2 bg-gray-500 hover:bg-gray-600 text-white font-medium rounded-md transition disabled:bg-gray-300 disabled:cursor-not-allowed"
          onClick={() => setTime(0)}
          disabled={time === 0}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
