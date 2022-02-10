import Search from "./Search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
          </div>
          <small>
            <a
              href="https://github.com/Lellien/React-weather-project"
              target="/blank"
            >
              Open-source code
            </a>{" "}
            by Yael Fromm
          </small>
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
