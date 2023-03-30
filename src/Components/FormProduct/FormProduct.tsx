import { useNavigate } from 'react-router-dom';
import useForm from '../../Hooks/useForm';

const FormProduct = () => {
  const { form, handleChange } = useForm({});
  const navigate = useNavigate();

  return (
    <form>
      <h2>Product Register</h2>
      <p>Name: </p>
      <input name='name' type='text' onChange={handleChange} />
      <select name='isActive' onChange={handleChange}>
          <option disabled selected>Is Active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
      </select>
      <select name='isUsed' onChange={handleChange}>
          <option disabled selected>Is Used?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
      </select>
      <button onClick={ async () => {
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        };
        try {
          const response = await fetch('http://localhost:8080/api/products', options);
          const data = await response.json();
          return data;
        } catch (error) {
          console.error(error)
        }
      }}>Save</button>
      <button onClick={() => { navigate('/')}}>Go Back</button>
    </form>
  )
}

export default FormProduct;
