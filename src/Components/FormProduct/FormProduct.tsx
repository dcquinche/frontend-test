import './styles.css';
import { useNavigate } from 'react-router-dom';
import useForm from '../../Hooks/useForm';

const FormProduct = () => {
  const { form, handleChange } = useForm({});
  const navigate = useNavigate();

  return (
    <form className='form'>
      <h2>Product Registration</h2>
      <input className='form__input' name='name' type='text' placeholder='Name' onChange={handleChange} />
      <select className='form__input' name='isActive' onChange={handleChange}>
          <option disabled selected>Is Active?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
      </select>
      <select className='form__input' name='isUsed' onChange={handleChange}>
          <option disabled selected>Is Used?</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
      </select>
      <section className='form__buttons'>
        <button className='form__button' onClick={ async () => {
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
        <button className='form__button' onClick={() => { navigate('/')}}>Go Back</button>
      </section>
    </form>
  )
}

export default FormProduct;
