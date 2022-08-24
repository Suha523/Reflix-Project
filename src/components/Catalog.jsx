import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Catalog.css";
import Movie from "./Movie";
import Search from "./Search";
import Budget from "./Budget";

export class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      budget: 10,
    };
  }

  isHaveRentedTrue = () => {
    return this.props.isHaveRentedTrue(this.props.moviesCatalog);
  };

  search = (text) => {
    this.setState({ search: text });
  };

  rent = (isRented) => {
    const rentCost = 3;
    this.setState({
      budget: isRented
        ? this.state.budget - rentCost
        : this.state.budget + rentCost,
    });
  };

  render() {
    return (
      <div>
        <div className="header">
          <Search searchText={this.state.search} search={this.search} />
          <Budget budget={this.state.budget} />
        </div>

        {this.isHaveRentedTrue() ? (
          <div className="rented">
            <h2>rented: </h2>
            <div className="movies-container">
              {this.props.moviesCatalog
                .filter(
                  (m) =>
                    m.isRented &&
                    m.title.toLowerCase().includes(this.state.search) === true
                )
                .map((m) => (
                  <Movie
                    key={m.id}
                    movie={m}
                    changeRented={this.props.changeRented}
                    budget={this.state.budget}
                    rent={this.rent}
                  />
                ))}
            </div>
          </div>
        ) : (
          <div></div>
        )}
        <div className="catalog">
          <h2>catalog: </h2>
          <div className="movies-container">
            {this.props.moviesCatalog
              .filter((m) => m.title.toLowerCase().includes(this.state.search))
              .map((m) => (
                <Movie
                  key={m.id}
                  movie={m}
                  changeRented={this.props.changeRented}
                  budget={this.state.budget}
                  rent={this.rent}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog;
