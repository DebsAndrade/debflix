import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../../services/MovieService';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filter, setFilter] = useState("");

  const filteredList = filter.length > 0 
    ? movies.filter((i) => i.title.toLowerCase().includes(filter))
    : [];

  useEffect(() => {
    getPopularMovies(true)
      .then(values => setMovies(values))
      .catch(error => console.log('Unable to get the movies:', error));
  }, []);

  const _onChange = (evento) => {
    setFilter(evento.target.value.toLowerCase());
  }

  return (
    <>
      <input onChange={_onChange} />
      {(filteredList.length ? filteredList : movies).map((item) => (
        <div key={item.id}>
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

export default Movies