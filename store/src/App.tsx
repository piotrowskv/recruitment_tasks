import { useState } from 'react';
import ProductList from './components/ProductListComponent';
import ProductFilterComponent from './components/ProductFilterComponent'

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
