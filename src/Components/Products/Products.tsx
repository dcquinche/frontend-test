import './styles.css';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';

interface productState {
  id: number;
  name: string;
  isActive: boolean;
  isUsed: boolean;
}

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  return(
    <div className="products">
      <h1 className='products__title'>Product Information</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><strong>ID</strong></TableCell>
              <TableCell align="center"><strong>Product</strong></TableCell>
              <TableCell align="center"><strong>Active</strong></TableCell>
              <TableCell align="center"><strong>Used</strong></TableCell>
              <TableCell align="center"><strong>More Detail</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              products.map((product: productState) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align="center"><strong>{product.id}</strong></TableCell>
                  <TableCell align="center">{product.name}</TableCell>
                  <TableCell align="center">{product.isActive ? 'Yes' : 'No'}</TableCell>
                  <TableCell align="center">{product.isUsed ?  'Yes' : 'No'}</TableCell>
                  <TableCell align="center">
                    <FontAwesomeIcon className="products__button" icon={faMagnifyingGlassPlus} title='More Detail' onClick={() => { navigate(`/${product.id}`) }} />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Products;
