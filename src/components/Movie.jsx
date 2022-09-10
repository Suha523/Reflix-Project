import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

export class Movie extends Component {
  changeRented = () => {
    const rentCost = 3;
    if (this.props.budget - rentCost > 0 || this.props.movie.isRented) {
      this.props.changeRented(this.props.movie.id);
      this.props.rent(this.props.movie.isRented);
    }
  };

  render() {
    let movie = this.props.movie;
    return (
      <div className="movie">
        <div className="movie-img">
          <img src={movie.img} alt=""></img>
          <div className="overlay">
            <Link key={movie.id} to={`/movies/${movie.id}`} className='link' >
              <h3>{movie.title}</h3>
            </Link>
          </div>
        </div>

        <div className="movie-body">
          <div className="action">
            {movie.isRented ? (
              <i className="fas fa-minus" onClick={this.changeRented}></i>
            ) : (
              <i className="fas fa-plus" onClick={this.changeRented}></i>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;
