import React, { Component } from "react";
import "./Search.css";

export class Search extends Component {
  search = (e) => {
    let sliceWord = e.target.value;
    this.props.search(sliceWord);
  };
  render() {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search Movie"
          value={this.props.searchText}
          onChange={this.search}
        ></input>
      </div>
    );
  }
}

export default Search;
