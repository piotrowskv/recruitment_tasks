import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './ProductListComponent';
import ProductFilterComponent from './ProductFilterComponent'

function App() {
  const [avaiabilityFilter, setAvaiabilityFilter] = useState(false)
  const [manufacturerFilter, setManufacturerFilter] = useState<string[]>([])

  return (
    <div className="App">
      <ProductFilterComponent ChangeAvaibilityFilter={setAvaiabilityFilter} ChangeManufacturersFilter={setManufacturerFilter} />
      <ProductList avaiabilityFilter={avaiabilityFilter} manufacturerFilter={manufacturerFilter} />
    </div>
  );
}

export default App;
