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
import UseForm from "hooks/useForm";
import {
  Button,
  InputLabel,
  MenuItem,
  Typography,
} from "@mui/material";
import Select from "@mui/material/Select";

const Home = () => {
  const [countries] = UseRequestData(`${URL_Countries}`);
  const [cities] = UseRequestData(`${URL_Cities}`);
  const { form, onChange, clearFields } = UseForm({
    name: "",
    email: "",
    tel: "",
    cpf: "",
    countries: [],
    cities: [],
  });

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    clearFields();
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
            name="name"
            size="small"
            value={form.name}
            onChange={onChange}
            fullWidth
            required
          />
          <CustomInput
            label="Email"
            variant="filled"
            name="email"
            size="small"
            value={form.email}
            onChange={onChange}
            fullWidth
            required
          />
          <CustomInput
            label="Telefone"
            variant="filled"
            name="tel"
            size="small"
            value={form.tel}
            onChange={onChange}
            fullWidth
            required
          />
          <CustomInput
            label="CPF"
            variant="filled"
            name="cpf"
            size="small"
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
          <CustomFormControl variant="filled" fullWidth required>
            <InputLabel>Países</InputLabel>
            <Select
              name="countries"
              value={form.countries}
              onChange={onChange}
              multiple
            >
              {countries
                .map((country: any) => {
                  return (
                    <MenuItem key={country.name_ptbr} value={country.name_ptbr}>
                      {country.name_ptbr}
                    </MenuItem>
                  );
                })
                .slice(248)}
            </Select>
          </CustomFormControl>
          <CustomFormControl variant="filled" fullWidth required>
            <InputLabel>Cidades</InputLabel>
            <Select
              name="cities"
              value={form.cities}
              onChange={onChange}
              multiple
            >
              {cities.map((city: any) => {
                return (
                  <MenuItem key={city.code} value={city.name_ptbr}>
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
