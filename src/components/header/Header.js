import React, {Component} from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "../../views/home/Home";
import styled from "styled-components";
import Movies from "../../views/movies/Movies";
import Series from "../../views/series/Series"

const H1 = styled.h1`
    color: #e50914;
`

class Header extends Component {

  render(){
    return(
      <BrowserRouter>
        <H1>DEBFLIX</H1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/filmes">Filmes</Link>
                </li>
                <li>
                    <Link to="/series">Séries</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filmes" element={<Movies />} />
            <Route path="/series" element={<Series />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Header;
