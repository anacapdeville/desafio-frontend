import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import addData from '../action';
import Header from '../components/Header';
import data from '../stocks.json';
import Assets from '../components/Assets';


class List extends React.Component {
  constructor() {
    super();
    this.state = {
      dataOrdened: []
    }
    this.organizingChart = this.organizingChart.bind(this);
    this.orderByPrice = this.orderByPrice.bind(this);
    this.orderByVariation = this.orderByVariation.bind(this);
  }

  // Para plotar o gráfico é necessário valores x e y. Os dados fornecidos tem apenas um valor. Por isso, abaixo é adicionado um valor x para cada valor y fornecido no array.

  addXValue(yValue, index) {
    return { x: index, y: yValue }
  }

  organizingChart() {
    const dataModified = data.map((element) => {
      return { ...element, chart: element.chart.map(this.addXValue) }
    });
    this.setState({ dataOrdened: dataModified });
  }

  componentDidMount() {
    this.organizingChart();
    const { saveData } = this.props;
    const { dataOrdened } = this.state;
    saveData(dataOrdened);
  }

  orderByPrice() {
    const { dataOrdened } = this.state;
    const dataModified = dataOrdened.sort(function (a, b) {
      return a.price - b.price;
    });
    this.setState({ dataOrdened: dataModified });
    const { saveData } = this.props;
    saveData(dataModified)
  }

  orderByVariation() {
    const { dataOrdened } = this.state;
    const dataModified = dataOrdened.sort(function (a, b) {
      return a.variation - b.variation;
    });
    this.setState({ dataOrdened: dataModified });
    const { saveData } = this.props;
    saveData(dataModified)
  }

  componentDidUpdate() {
    const { saveData } = this.props;
    const { dataOrdened } = this.state;
    saveData(dataOrdened);
  }

  render() {
    return (
      <div>
        <Header />
        <h1>Lista</h1>
        <button onClick={this.orderByPrice}>Ordenar os ativos por preço</button>
        <button onClick={this.orderByVariation}>Ordenar os ativos pela variação</button>
        <Assets />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveData: (data) => dispatch(addData(data))
})

List.propTypes = {
  saveData: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(List);