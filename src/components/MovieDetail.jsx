import React, { Component } from "react";
import "./MovieDetail.css";

export class MovieDetail extends Component {
  render() {
    let movieId = this.props.match.params.movieId;
    let movie = this.props.state.moviesCatalog[movieId];
    return (
      <div className="movie-detail">
        <h1>
          {movie.title} ({movie.year})
        </h1>
        <div className="img">
          <img alt="" src={movie.img}></img>
        </div>
        <p className="description">{movie.descrShort}</p>
      </div>
    );
  }
}

export default MovieDetail;
