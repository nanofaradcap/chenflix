import React, { Component } from "react";
import ShowCard from "./ShowCard";
import Header from "./Header";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "" };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  // //lifecycle methods
  // //after it's rendered to the DOM
  // componentDidMount() {
  //   //can access window
  //   //do library integration here i.e. d3
  // }

  // //cleanup
  // componentWillUnmount() {

  // }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div className="search">
        <header>
          <h1>chenflix</h1>
          <Header
            searchTerm={this.state.searchTerm}
            showSearch
            handleSearchTermChange={this.handleSearchTermChange}
          />
        </header>
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} show={show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
