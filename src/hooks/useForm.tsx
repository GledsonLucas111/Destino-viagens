import { useState } from "react";

type formType = {
  name: string;
  email: String;
  tel: string;
  cpf: string;
  countries: string[] | any;
  cities: string[] | any;
}
const UseForm = (initialState: formType) => {
  const [form, setForm] = useState<formType>(initialState);
  const onChange = (event: any) => {

    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const clearFields = () => {
    setForm(initialState);
  };
  
  return { form, onChange, clearFields };
};
export default UseForm;
