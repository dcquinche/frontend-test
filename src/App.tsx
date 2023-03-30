import { Route, Routes } from 'react-router-dom';
import Products from './Components/Products/Products';
import ProductById from './Components/ProductById/ProductById';
import FormProduct from './Components/FormProduct/FormProduct';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/:id' element={<ProductById />} />
        <Route path='/register' element={<FormProduct />} />
      </Routes>
    </div>
  );
}

export default App;
