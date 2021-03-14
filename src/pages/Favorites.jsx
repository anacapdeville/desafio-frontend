import React from 'react';
import Header from '../components/Header';
import { AreaSeries, XYPlot } from 'react-vis';

class Favorites extends React.Component {

  render() {
    const data = JSON.parse(localStorage.getItem('assets'))
    return (
      <div>
        <Header />
        <h1>Favoritos</h1>
        <button onClick={this.orderByPrice}>Ordenar os ativos por preço</button>
        <button onClick={this.orderByVariation}>Ordenar os ativos pela variação</button>
        {data.map((asset) => (
          <div key={asset.stock}>
            <h3>{asset.stock}</h3>
            <span>{asset.price} | </span><span>{asset.variation} %</span><span onClick={() => this.addToFavorites(asset)}><button>Remover</button></span>
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
    );
  }
}


export default Favorites;