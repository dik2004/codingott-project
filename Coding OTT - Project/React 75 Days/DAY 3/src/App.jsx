import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
      }}
    >
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          marginRight: "10px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;