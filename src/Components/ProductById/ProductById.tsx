import './styles.css';
import { useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

interface productState {
  id: number;
  name: string;
  isActive: boolean;
  isUsed: boolean;
}

const ProductById = () => {
  const [product, setProduct] = useState<productState>(Object);
  const { id } = useParams();
  const navigate = useNavigate();

  const getApi = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/products/${id}`);
      const data = await response.json();
      setProduct(data)
    } catch (error) {
      console.error(error)
    }
  }
  getApi()

  return(
    <div className="product">
      <h1>{product.name}</h1>
      <p>{product.isActive ? 'The product is available' : 'The product is not available'} and {product.isUsed ? 'has been used' : 'has not been used'}</p>
      <button className='product__button' onClick={() => { navigate('/') }}>Go Back</button>
    </div>
  )
}

export default ProductById;
