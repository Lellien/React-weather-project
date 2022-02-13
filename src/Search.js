import React from "react";

import "./Search.css";

export default function Search(props) {
  return (
    <div className="Search">
      <form onSubmit={props.submit}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter a city"
          onChange={props.update}
        />
        <span className="search-button">
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </span>
      </form>
    </div>
  );
}
