import './styles.css';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import UpdateProduct from '../UpdateProduct/UpdateProduct';

interface productState {
  _id: string;
  name: string;
  isActive: boolean;
  isUsed: boolean;
}

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products');
        const data = await response.json();
        setProducts(data)
      } catch (error) {
        console.error(error)
      }
    }
    getApi()
  }, [products])


  return(
    <div className='products'>
      <h1 className='products__title'>Products Information</h1>
      <table className='products__table'>
        <th className='products__tableHead--name'>Product</th>
        <th className='products__tableHead--active'>Active</th>
        <th className='products__tableHead--used'>Used</th>
        <th className='products__tableHead'>Options</th>
      </table>
        {
          products.map((product: productState) => (
            <UpdateProduct
              key={product._id}
              id={product._id}
              name={product.name}
              isActive={product.isActive}
              isUsed={product.isUsed}
            />
          ))
        }
      <button className='products__register' onClick={() => { navigate('/register') }}>Add a New Product</button>
    </div>
  )
}

export default Products;
