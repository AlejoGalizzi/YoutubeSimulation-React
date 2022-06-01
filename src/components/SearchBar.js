import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  state = { text: "" };

  onInputChange = (event) => {
    this.setState({ text: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search</label>
            <input
              type="text"
              value={this.state.value}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
