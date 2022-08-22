import React from "react";
import { getPopularSeries } from "../../services/SeriesService";

export default class Series extends React.Component {
  state = {
    series: [],
    filterSeries: []
  }

  componentDidMount() {
    getPopularSeries(true).then((values) => {
      this.setState({
        series: values,
        filterSeries: values
      })
    })
  }

  handleChange = (event) =>{
    const listaFiltrada = this.state.series.filter((item) => {
        return item.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({
        filterSeries: listaFiltrada
    })
    console.log(this.state.filterSeries)
}

  render() {
    return (
      <>
        <input onChange={this.handleChange} />
        {this.state.filterSeries.map((item, index) => (
          <div>
            <ul key={index}>
              <li>{item.name}</li>
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