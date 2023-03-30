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
    <div className="products">
      <h1 className='products__title'>Products Information</h1>
      <button onClick={() => { navigate('/register') }}>New Product</button>
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
    </div>
  )
}

export default Products;
