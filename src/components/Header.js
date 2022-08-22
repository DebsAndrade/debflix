import React, {Component} from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Contatos from "./Contatos";
import styled from "styled-components";
import Movies from "../views/movies/Movies";

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
                    <Link to="/sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/contatos">Contatos</Link>
                </li>
                <li>
                    <Link to="/filmes">Filmes</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/filmes" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    )
  }
}

export default Header;
