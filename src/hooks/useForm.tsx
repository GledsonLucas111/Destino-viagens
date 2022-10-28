import { useState } from "react";

const UseForm = (initialState: any) => {
  const [form, setForm] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clearFields = () => {
    setForm(initialState);
  };

  return { form, onChange, clearFields };
};
export default UseForm;
