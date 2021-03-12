import React from 'react';
import Header from '../components/Header';
import data from '../stocks.json';


function List() {
  let dataModified = data;

  // Para plotar o gráfico é necessário valores x e y. Os dados fornecidos tem apenas um valor. Por isso, abaixo é adicionado um valor x para cada valor y fornecido no array.

  const addXValue = (yValue, index) => {
    return { x: index, y: yValue }
  }

  dataModified = dataModified.map((element) => {
    return { ...element, chart: element.chart.map(addXValue) }
  })

  console.log(dataModified)

  return (
    <div>
      <Header />
      <h1>Lista</h1>
    </div>
  );
}

export default List;