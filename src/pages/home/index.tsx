import * as React from "react";
import { URL_Cities, URL_Countries } from "constants/urls";
import UseRequestData from "hooks/UseRequestData";
import {
  CustomInput,
  CustomFormControl,
  FormStyled,
  sendButton,
  Flex,
  CustomStack,
} from "./style";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import UseForm from "hooks/useForm";
import { Button, InputLabel, MenuItem, Typography } from "@mui/material";
import Swal from "sweetalert2";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const Home = () => {
  const [countries] = UseRequestData(`${URL_Countries}`);
  const [cities] = UseRequestData(`${URL_Cities}`);
  const [countriesForm, setCountriesForm] = React.useState<string[]>([]);
  const [citiesForm, setCitiesForm] = React.useState<string[]>([]);
  const { form, onChange, clearFields } = UseForm({
    name: "",
    email: "",
    tel: "",
    cpf: "",
    countries: [],
    cities: [] ,
  });

  React.useEffect(() => {
    form.countries = countriesForm;
    form.cities = citiesForm;
  });

  const handleChangeCountries = (event: SelectChangeEvent<typeof countriesForm>) => {
    const { target: { value } } = event;
    setCountriesForm(typeof value === "string" ? value.split(",") : value);
  };
  const handleChangeCities = (event: SelectChangeEvent<typeof countriesForm>) => {
    const { target: { value } } = event;
    setCitiesForm(typeof value === "string" ? value.split(",") : value);
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearFields();
    Swal.fire({
      position: "top-end",
      icon: "success",
      iconColor: "#fff",
      background: "#35b468",
      html: `<h3> Formulário enviado! </h3>`,
      color: "#fff",
      showConfirmButton: false,
      timer: 2000,
      toast: true,
    });
    setCitiesForm([]);
    setCountriesForm([]);
  };
  
  return (
    <FormStyled onSubmit={submit}>
      <Flex gap={2}>
        <CustomStack spacing={2}>
          <Typography variant="h6" color="white">
            Dados pessoais
          </Typography>
          <CustomInput
            label="Nome"
            variant="filled"
            size="small"
            name="name"
            value={form.name}
            onChange={onChange}
            fullWidth
            required
          />
          <CustomInput
            label="Email"
            variant="filled"
            size="small"
            name="email"
            value={form.email}
            onChange={onChange}
            fullWidth
            required
          />
          <CustomInput
            label="Telefone"
            variant="filled"
            size="small"
            name="tel"
            value={form.tel}
            onChange={onChange}
            fullWidth
            required
          />
          <CustomInput
            label="CPF"
            variant="filled"
            size="small"
            name="cpf"
            value={form.cpf}
            onChange={onChange}
            fullWidth
            required
          />
        </CustomStack>

        <CustomStack spacing={2}>
          <Typography variant="h6" color="white">
            Destinos de interesses
          </Typography>
          <CustomFormControl variant="filled" fullWidth>
            <InputLabel>Países</InputLabel>
            <Select
              name="countries"
              value={countriesForm}
              onChange={handleChangeCountries}
              MenuProps={MenuProps}
              multiple
              required
            >
              {countries.map((country: { code: string; name_ptbr: string }) => {
                return (
                  <MenuItem key={country.code} value={country.name_ptbr}>
                    {country.name_ptbr}
                  </MenuItem>
                );
              })}
            </Select>
          </CustomFormControl>
          <CustomFormControl variant="filled" fullWidth>
            <InputLabel>Cidades</InputLabel>
            <Select
              name="cities"
              value={citiesForm}
              onChange={handleChangeCities}
              MenuProps={MenuProps}
              multiple
              required
            >
              {cities.map((city: { id: string; name_ptbr: string }) => {
                return (
                  <MenuItem key={city.id} value={city.name_ptbr}>
                    {city.name_ptbr}
                  </MenuItem>
                );
              })}
            </Select>
          </CustomFormControl>
        </CustomStack>
      </Flex>
      <Button type="submit" sx={sendButton}>
        Enviar
      </Button>
    </FormStyled>
  );
};
export default Home;
