import React from "react";

const Search = props => (
  <form>
    <div className="form-group">
      <label htmlFor="topic">Topic:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="topic"
        type="text"
        className="form-control"
        placeholder="Search For a Topic"
        id="topic"
      />
      <br />
      <label htmlFor="startYear">Start Year:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="startYear"
        type="text"
        className="form-control"
        placeholder="Start Year"
        id="startYear"
      />
      <br />
      <label htmlFor="endYear">End Year:</label>
      <input
        onChange={props.handleInputChange}
        value={props.value}
        name="endYear"
        type="text"
        className="form-control"
        placeholder="End Year"
        id="endYear"
      />
      <br />
      <button onClick={props.handleFormSubmit} className="btn btn-primary">
        Search
      </button>
    </div>
  </form>
);

export default Search;
