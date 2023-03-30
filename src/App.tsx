import { Route, Routes } from 'react-router-dom';
import Products from './Components/Products/Products';
import ProductById from './Components/ProductById/ProductById';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/:id' element={<ProductById />} />
      </Routes>
    </div>
  );
}

export default App;
