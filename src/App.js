import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <small>
          <a
            href="https://github.com/Lellien/React-weather-project"
            target="/blank"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a href="https://quirky-jang-428adc.netlify.app/" target="/blank">
            Yael Fromm
          </a>
        </small>
      </div>
    </div>
  );
}

export default App;
