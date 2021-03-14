import React from 'react';
import Header from '../components/Header';
import data from '../stocks.json';
import { AreaSeries, XYPlot } from 'react-vis';

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      dataOrdened: []
    }
    this.organizingChart = this.organizingChart.bind(this);
    this.orderByPrice = this.orderByPrice.bind(this);
    this.orderByVariation = this.orderByVariation.bind(this);
    this.defaultOrder = this.defaultOrder.bind(this);
  }

  // Para plotar o gráfico é necessário valores x e y. Os dados fornecidos tem apenas um valor. Por isso, abaixo é adicionado um valor x para cada valor y fornecido no array.

  addXValue(yValue, index) {
    return { x: index, y: yValue }
  }

  organizingChart() {
    return data.map((element) => (
      { ...element, chart: element.chart.map(this.addXValue) }
    ));
  }

  componentDidMount() {
    this.setState({ dataOrdened: this.organizingChart() })
  }

  orderByPrice() {
    const { dataOrdened } = this.state;
    const dataModified = dataOrdened.sort(function (a, b) {
      return a.price - b.price;
    });
    this.setState({ dataOrdened: dataModified });
  }

  orderByVariation() {
    const { dataOrdened } = this.state;
    const dataModified = dataOrdened.sort(function (a, b) {
      return a.variation - b.variation;
    });
    this.setState({ dataOrdened: dataModified });
  }

  addToFavorites(asset) {
    let arrayAssets = JSON.parse(localStorage.getItem('assets'));
    if (arrayAssets) {
      const includesAsset = arrayAssets.some((element) => element.stock === asset.stock);
      if (!includesAsset) {
        arrayAssets.push(asset);
        localStorage.setItem('assets', JSON.stringify(arrayAssets));
      }
    } else {
      arrayAssets = [asset];
      localStorage.setItem('assets', JSON.stringify(arrayAssets))
    }
  }

  defaultOrder() {
    this.setState({ dataOrdened: this.organizingChart() });
  }

  render() {
    const { dataOrdened } = this.state;
    return (
      <div>
        <Header />
        <div className="page">
          <h1>Ativos</h1>
          <button onClick={this.orderByPrice}>Ordenar os ativos por preço</button>
          <button onClick={this.orderByVariation}>Ordenar os ativos pela variação</button>
          <button onClick={this.defaultOrder}>Ordenação padrão</button>
          {dataOrdened.map((asset) => (
            <div key={asset.stock}>
              <h3>{asset.stock}</h3>
              <span>{asset.price} | </span><span>{asset.variation} %</span><span><button onClick={() => this.addToFavorites(asset)}>Favoritar</button></span>
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

export default List;
