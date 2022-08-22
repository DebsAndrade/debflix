import React from "react";
import { getPopularMovies } from "../../services/MovieService";

export default class Movies extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    getPopularMovies(true).then((values) => {
      this.setState({
        movies: values
      })
    })
  }

  render() {
    return (
      <>
        {this.state.movies.map((item, index) => (
          <div>
            <ul key={index}>
              <li>{item.title}</li>
              <li>{item.overview}</li>
              <li>{item.vote_average}</li>
            </ul>
            <img src={item.image} alt="posters" />
          </div>
        ))}
      </>
    )
  }
}