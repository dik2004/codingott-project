import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {


  const [image, setImage] = useState(true);
  const [bgColor, setBgColor] = useState("default");
  const [outputText, setOutputText] = useState("");
  const [textSize, setTextSize] = useState(18 + "px");
  const [boxColor, setBoxColor] = useState("#f1f5f9");
  const [inputColor, setInputColor] = useState("");

  const bgColorChange = (color) => {

    if (color !== "") {

      setBgColor(color);

    }

  }

  const liveTyping = (text) => {

    if (!text) {

      toast.error("Something Went Wrong");

    } else {

      setOutputText(text);

    }

  }

  const changeFontSize = (size) => {

    setTextSize(size + "px")

  }

  const changeBoxColor = (color) => {

    if (!color) {

      toast.error("Invalid color code!");

    } else {

      setBoxColor(color);

    }

  }

  return (

    <div className="app-container">

      <header className="app-header">
        <h1>React 75 Days Challenge</h1>
        <p>Day 14 - Interactive Features</p>
      </header>

      <main className="grid-layout">

        <section className="card">
          <h2>Hide / Show Image</h2>
          <p className="desc">Button click se image hide/show karni hai.</p>

          {image ? <div className="image-box">

            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38?w=900"
              alt="Demo"
              className="preview-image"
            />

          </div> : ""}
          <button className="btn primary-btn" onClick={() => { setImage(!image) }}>{image ? "Hide Image" : "Show Image"}</button>
        </section>

        <section className="card">
          <h2>Change Background Color</h2>
          <p className="desc">Select option se div ka background change karna hai.</p>

          <div className="color-preview-box" style={{ backgroundColor: bgColor }}>
            <p>Background Preview Box</p>
          </div>

          <select className="select-input" onChange={(e) => { bgColorChange(e.target.value) }}>
            <option value="">Select Color</option>
            <option value="lightblue">Light Blue</option>
            <option value="lightgreen">Light Green</option>
            <option value="lavender">Lavender</option>
            <option value="mistyrose">Misty Rose</option>
            <option value="beige">Beige</option>
          </select>
        </section>

        <section className="card">
          <h2>Live Input Preview</h2>
          <p className="desc">User type kare aur instantly output me show ho.</p>

          <input
            type="text"
            className="text-input"
            placeholder="Type something..."
            onInput={(e) => { liveTyping(e.target.value) }}
            maxLength={100}
          />

          <div className="output-box">
            <span className="label">Preview:</span>
            <p className="output-text">{outputText.trim() === "" ? "Your text will appear here..." : outputText}</p>
          </div>
        </section>

        <section className="card">
          <h2>Font Size Controller</h2>
          <p className="desc">Slider move karne par font size change hoga.</p>

          <input
            type="range"
            className="range-slider"
            min="12"
            max="60"
            defaultValue="18"
            onInput={(e) => { changeFontSize(e.target.value) }}
          />

          <div className="output-box">
            <span className="label">Live Text:</span>
            <p className="range-text" style={{ fontSize: textSize }}>Adjust my font size!</p>
          </div>
        </section>

        <section className="card special-card">
          <h2>Card Color Changer</h2>
          <p className="desc">
            Color name ya hex enter karo aur Change button se apply karo.
          </p>

          <div className="dynamic-card" style={{ backgroundColor: boxColor }}>
            <p className="dynamic-text">This card background will change</p>
          </div>

          <div className="input-row">
            <input
              type="text"
              className="text-input"
              placeholder="Enter color (e.g. red / #ff0000)"
              value={inputColor}
              onChange={(e) => setInputColor(e.target.value)}
            />
            <button className="btn secondary-btn" onClick={() => { changeBoxColor(inputColor) }}>Change</button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© Built By Sarfraj Shaikh</p>
      </footer>

      <ToastContainer position="top-right" autoClose={2000} />

    </div>


  );

}

export default App