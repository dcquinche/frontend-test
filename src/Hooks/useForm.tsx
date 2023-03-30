import { useState } from 'react';

interface event {
  target: {
    value: string;
    name: string;
  }
}

const useForm = (initialValue: object) => {
  const [form, setForm] = useState(initialValue);

  const handleChange = (event: event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  return { form, handleChange };
};

export default useForm;
