import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useForm from '../../Hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const UpdateProduct = (props: { id: string, name: string, isActive: boolean, isUsed: boolean}) => {
  const { form, handleChange } = useForm({});
  const [update, setUpdate] = useState(false);
  const navigate = useNavigate();

  return (
    <div key={props.id}>
      {
        update === false ? (
          <>
            <p><strong>{props.id}</strong></p>
            <p>{props.name}</p>
            <p>{props.isActive ? 'Yes' : 'No'}</p>
            <p>{props.isUsed ?  'Yes' : 'No'}</p>
            <p>
              <FontAwesomeIcon className="products__button" icon={faMagnifyingGlassPlus} title='More Detail' onClick={() => { navigate(`/${props.id}`) }} />
              <FontAwesomeIcon className="products__button" icon={faEdit} title='Update' onClick={() => {setUpdate(true)}} />
              <FontAwesomeIcon className="products__button" icon={faTrash} title='Delete' onClick={ async () => {
                const options = {
                  method: 'DELETE',
                };
                try {
                  const response = await fetch(`http://localhost:8080/api/products/${props.id}`, options);
                  const data = await response.json();
                  return data;
                } catch (error) {
                  console.error(error)
                }
                }}
              />
            </p>
          </>
        ) : (
          <form>
            <p>Name: </p>
            <input name='name' type='text' defaultValue={props.name} onChange={handleChange} />
            <select name='isActive' defaultValue={props.isActive.toString()} onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <select name='isUsed' defaultValue={props.isUsed.toString()} onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <button onClick={async () => {
              const options = {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({...form}),
              };
              try {
                const response = await fetch(`http://localhost:8080/api/products/${props.id}`, options);
                const data = await response.json();
                return data;
              } catch (error) {
                console.error(error)
              }
            }}>
              Save Changes
            </button>
            <button onClick={() => { navigate('/') }}>Cancel</button>
          </form>
        )
      }
    </div>
  )
}

export default UpdateProduct;
