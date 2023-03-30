import './styles.css';
import { useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface productState {
  id: number;
  name: string;
  isActive: boolean;
  isUsed: boolean;
}

const CardInfo = () => {
  const [products, setProducts] = useState([]);

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
    <div className="card-info">
      <h1 className='card-info__title'>Product Information</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"><strong>ID</strong></TableCell>
              <TableCell align="center"><strong>Name</strong></TableCell>
              <TableCell align="center"><strong>Active</strong></TableCell>
              <TableCell align="center"><strong>Used</strong></TableCell>
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
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default CardInfo;
