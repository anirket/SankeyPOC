import React from 'react';
import ReactVis from './ReactVis';
import Sankey from './Sankey';

function App() {
  const links = [
    { source: 0, target: 1, value: 80, color: '#C7DDF7' }, // eng to app
    { source: 0, target: 2, value: 70, color: '#C7DDF7' }, // eng to app
    { source: 0, target: 3, value: 40, color: '#C7DDF7' }, // eng to app
    { source: 1, target: 4, value: 10, color: '#C7DDF7' },// eng to app
    { source: 1, target: 5, value: 10, color: '#C7DDF7' },
    { source: 1, target: 6, value: 10, color: '#C7DDF7' },
    { source: 2, target: 7, value: 15, color: '#C7DDF7' },// eng to app
    { source: 2, target: 8, value: 15, color: '#C7DDF7' },
    { source: 2, target: 9, value: 15, color: '#C7DDF7' },
    { source: 3, target: 10, value: 10, color: '#C7DDF7' },// eng to app
    { source: 3, target: 11, value: 10, color: '#C7DDF7' },
    { source: 3, target: 12, value: 10, color: '#C7DDF7' },/// eng to app
    // eng to app


    // eng to app
    // eng to app


  ]

  const nodes = [
    { key: 0, color: '#D1D5DB', display: 'Portfolio', percentage: "25%" },
    { key: 1, color: '#D1D5DB', display: 'Financials', percentage: "25%" },
    { key: 2, color: '#D1D5DB', display: 'Materials', percentage: "25%" },
    { key: 3, color: '#D1D5DB', display: 'Energy', percentage: "25%" },
    { key: 4, color: '#D1D5DB', display: 'DELI' },
    { key: 5, color: '#D1D5DB', display: 'Basket' },
    { key: 6, color: '#D1D5DB', display: 'Car' },
    { key: 7, color: '#D1D5DB', display: 'Car' },
    { key: 8, color: '#D1D5DB', display: 'Car' },
    { key: 9, color: '#D1D5DB', display: 'Car' },
    { key: 10, color: '#D1D5DB', display: 'Car' },
    { key: 11, color: '#D1D5DB', display: 'Car' },
    { key: 12, color: '#D1D5DB', display: 'Car' },




  ]


  return (
    <div className="App">
      <Sankey
        nodes={nodes}
        links={links}
        width={500}
        height={250}
      />
    </div>
  );
}

export default App;
