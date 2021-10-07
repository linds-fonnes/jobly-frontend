import React, { useState } from "react";
import "./styles/SearchBar.css";

function SearchBar({ term }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(evt) {
    evt.preventDefault();
    term(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
  }

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <div className="SearchBar mb-4 mt-4 mx-auto">
      <form className="" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            className="form-control"
            name="searchTerm"
            placeholder="Search for a term.."
            value={searchTerm}
            onChange={handleChange}
          ></input>
          <button className="btn btn-med btn-info" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
