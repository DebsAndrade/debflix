import React from "react";
import { getPopularMovies } from "../../services/MovieService";

export default class Movies extends React.Component {
  state = {
    movies: [],
    filterMovies: []
  }

  componentDidMount() {
    getPopularMovies(true).then((values) => {
      this.setState({
        movies: values,
        filterMovies: values
      })
    })
  }

  handleChange = (event) =>{
    const listaFiltrada = this.state.movies.filter((item) => {
        return item.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({
        filterMovies: listaFiltrada
    })
    console.log(this.state.filterMovies)
}

  render() {
    return (
      <>
      {console.log('Renderizou class')}
        <input onChange={this.handleChange} />
        {this.state.filterMovies.map((item, index) => (
          <div key={index}>
            <ul>
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