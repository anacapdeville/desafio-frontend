import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import addData from '../action';
import Header from '../components/Header';
import data from '../stocks.json';


function List() {
  const [dataOrdened, setDataOrdened] = useState([]);
  let dataModified = data;

  // Para plotar o gráfico é necessário valores x e y. Os dados fornecidos tem apenas um valor. Por isso, abaixo é adicionado um valor x para cada valor y fornecido no array.

  const addXValue = (yValue, index) => {
    return { x: index, y: yValue }
  }

  dataModified = dataModified.map((element) => {
    return { ...element, chart: element.chart.map(addXValue) }
  })

  useEffect(() => {

  })

  return (
    <div>
      <Header />
      <h1>Lista</h1>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  saveData: (data) => dispatch(addData(data))
})

export default connect(null, mapDispatchToProps)(List);