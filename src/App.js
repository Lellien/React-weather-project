import "./city-day.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="d-flex align-items-center">
              <img
                className="img-fluid"
                id="city-buildings"
                src="/src/city-day.svg"
                alt="city buildings"
              />
              <form id="search-form">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter City"
                  autoComplete="off"
                  id="city-input"
                />
                <span className="search-button">
                  <button type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                </span>
              </form>
              <span className="location-button-container">
                <button id="location-button">
                  <i
                    className="fas fa-location-arrow"
                    id="location-arrow-icon"
                  ></i>
                </button>
              </span>
            </div>
            <h1>""</h1>
            <ul>
              <li>
                Local time:
                <span id="time"></span>
              </li>
              <li id="date"></li>
              <li id="weather-description"></li>
            </ul>
            <div className="row weather-main">
              <div className="col-7">
                <img className="img-fluid" src="" alt="" id="icon" />
                <strong className="temp"></strong>
                <div
                  className="btn-group btn-group-sm"
                  role="group"
                  aria-label="Pair of radio toggle buttons"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="celsius-button"
                    autoComplete="off"
                    defaultChecked
                  />
                  <label className="btn unit-btn" for="celsius-button">
                    °C
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="fahrenheit-button"
                    autoComplete="off"
                  />
                  <label className="btn unit-btn" for="fahrenheit-button">
                    °F
                  </label>
                </div>
              </div>
              <div className="col-5">
                <ul className="extra-info">
                  <li>
                    Humidity: <span id="humidity"></span>
                  </li>
                  <li>
                    Wind: <span id="wind-speed"></span>,
                    <span id="wind-direction"></span>
                  </li>
                  <li>
                    Visibility: <span id="visibility"></span>
                  </li>
                </ul>
              </div>
            </div>
            <section className="weather-forecast" id="forecast"></section>
          </div>
          <small>
            <a
              href="https://github.com/Lellien/Weather-App-Project"
              target="/blank"
            >
              Open-source code
            </a>
            by Yael Fromm
          </small>
        </div>
      </div>{" "}
    </div>
  );
}

export default App;
