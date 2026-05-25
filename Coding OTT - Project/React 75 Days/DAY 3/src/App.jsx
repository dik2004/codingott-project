import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`h-screen flex items-center justify-center transition-all duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`p-10 rounded-2xl shadow-xl text-center w-80 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-3xl font-bold mb-6">
          {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
        </h1>

        <p className="mb-6">
          Click the button to switch theme
        </p>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ${
            darkMode
              ? "bg-yellow-400 text-black hover:bg-yellow-300"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          Toggle Mode
        </button>
      </div>
    </div>
  );
}

export default App;