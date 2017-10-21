import React from "react";
import { Link } from "react-router-dom";
import preload from "./data.json";
import ShowCard from "./ShowCard";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>chenflix</h1>
          <input
            onChange={this.handleSearchTermChange}
            type="text"
            value={this.state.searchTerm}
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} show={show} />)}
        </div>
        <Link to="/">Back to Landing</Link>
      </div>
    );
  }
}

export default Search;

/*JSON.stringify(preload, null, 4)*/
