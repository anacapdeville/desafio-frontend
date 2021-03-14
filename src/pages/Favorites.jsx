import React from 'react';
import Header from '../components/Header';
import { AreaSeries, XYPlot } from 'react-vis';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
    this.orderByPrice = this.orderByPrice.bind(this);
    this.orderByVariation = this.orderByVariation.bind(this);
    this.defaultOrder = this.defaultOrder.bind(this);
    this.removeFromFavorites = this.removeFromFavorites.bind(this);
  }

  componentDidMount() {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('assets'))
    this.setState({ data: dataFromLocalStorage });
  }

  orderByPrice() {
    const { data } = this.state;
    const dataModified = data.sort(function (a, b) {
      return a.price - b.price;
    });
    this.setState({ data: dataModified });
  }

  orderByVariation() {
    const { data } = this.state;
    const dataModified = data.sort(function (a, b) {
      return a.variation - b.variation;
    });
    this.setState({ data: dataModified });
  }

  defaultOrder() {
    const dataFromLocalStorage = JSON.parse(localStorage.getItem('assets'));
    this.setState({ data: dataFromLocalStorage });
  }

  removeFromFavorites(asset) {
    let dataFromLocalStorage = JSON.parse(localStorage.getItem('assets'));
    const index = dataFromLocalStorage.findIndex((element) => element.stock === asset.stock)
    dataFromLocalStorage.splice(index, 1);
    this.setState({ data: dataFromLocalStorage });
    localStorage.setItem('assets', JSON.stringify(dataFromLocalStorage));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <Header />
        <div className="page">
          <h1>Ativos favoritos</h1>
          <button onClick={this.orderByPrice}>Ordenar os ativos por preço</button>
          <button onClick={this.orderByVariation}>Ordenar os ativos pela variação</button>
          <button onClick={this.defaultOrder}>Ordenação padrão</button>
          {data && data.map((asset) => (
            <div key={asset.stock}>
              <h3>{asset.stock}</h3>
              <span>{asset.price} | </span><span>{asset.variation} %</span><span><button onClick={() => this.removeFromFavorites(asset)}>Remover</button></span>
              <XYPlot height={200} width={600}>
                <AreaSeries
                  data={asset.chart}
                  opacity={0.5}
                  style={{}}
                />
              </XYPlot>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Favorites;
