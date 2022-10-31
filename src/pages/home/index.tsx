import * as React from "react";
import {
  Button,
  Flex,
  Input,
  Stack,
  Text,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import { URL_Cities, URL_Countries } from "constants/urls";
import UseRequestData from "hooks/UseRequestData";
import { CustomRequired, FormStyled, SelectReact } from "./style";
import UseForm from "hooks/useForm";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const Home = () => {
  const [countries] = UseRequestData(`${URL_Countries}`);
  const [cities] = UseRequestData(`${URL_Cities}`);
  const [countriesForm, setCountriesForm] = React.useState([]);
  const [citiesForm, setCitiesForm] = React.useState([]);
  const { form, onChange, clearFields } = UseForm({
    name: "",
    email: "",
    tel: "",
    cpf: "",
    countries: [],
    cities: [],
  });
  const toast = useToast();
  const [smallWidth] = useMediaQuery("(min-width: 750px)");
  const [requiredCountries, setRequiredCountries] = React.useState(true);
  const [requiredCities, setRequiredCities] = React.useState(true);

  React.useEffect(() => {
    form.countries = countriesForm;
    form.cities = citiesForm;
    
    countriesForm.length === 0
      ? setRequiredCountries(true)
      : setRequiredCountries(false);

    citiesForm.length === 0
      ? setRequiredCities(true)
      : setRequiredCities(false);
  }, [countriesForm, citiesForm, form]);

  // função para enviar o formulário, o 'setTimeout' é para aguardar enquanto o 'tost' está na tela
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Sucesso.",
      description: "Seu formulário foi enviado com sucesso",
      status: "success",
      duration: 1500,
      isClosable: false,
    });
    setTimeout(() => {
      clearFields();
      window.location.reload();
    }, 2000);
  };

  return (
    <FormStyled onSubmit={submit}>
      <Flex
        w="100%"
        h="40%"
        flexDirection={smallWidth ? "row" : "column"}
        justifyContent="space-evenly"
        alignItems={smallWidth ? "flex-start" : "center"}
        gap={2}
      >
        <Stack
          spacing={4}
          display="flex"
          align="center"
          w={smallWidth ? "35%" : "90%"}
        >
          <Text as="b" color="white">
            Dados pessoais
          </Text>
          <Input
            placeholder="Nome"
            type="name"
            name="name"
            value={form.name}
            onChange={onChange}
            variant="filled"
            focusBorderColor="yellow700"
            _focus={{ color: "white" }}
            required
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            variant="filled"
            focusBorderColor="yellow700"
            _focus={{ color: "white" }}
            required
          />
          <Input
            placeholder="Telefone"
            type="tel"
            name="tel"
            value={form.tel}
            onChange={onChange}
            variant="filled"
            focusBorderColor="yellow700"
            _focus={{ color: "white" }}
            title="Apenas no números neste campo"
            maxLength={11}
            required
          />
          <Input
            placeholder="CPF"
            name="cpf"
            title="Apenas no números neste campo"
            value={form.cpf}
            onChange={onChange}
            variant="filled"
            focusBorderColor="yellow700"
            _focus={{ color: "white" }}
            maxLength={14}
            minLength={11}
            required
          />
        </Stack>

        <Stack
          spacing={4}
          display="flex"
          align="center"
          w={smallWidth ? "35%" : "90%"}
        >
          <Text as="b" color="white">
            Destinos de interesses
          </Text>
          <SelectReact
            options={countries.map(
              (country: { name_ptbr: string; code: string }) => {
                return { label: country.name_ptbr, value: country.code };
              }
            )}
            isMulti
            onChange={(item: any) => setCountriesForm(item)}
            components={animatedComponents}
          />
          {requiredCountries ? (
            <CustomRequired>
              <strong>!</strong> <p>Campo obrigatório.</p>
            </CustomRequired>
          ) : (
            ""
          )}
          <SelectReact
            options={cities.map(
              (city: { name_ptbr: string; country_code: string }) => {
                return { label: city.name_ptbr, value: city.country_code };
              }
            )}
            isMulti
            onChange={(item: any) => setCitiesForm(item)}
            components={animatedComponents}
          />
          {requiredCities ? (
            <CustomRequired>
              <strong>!</strong> <p>Campo obrigatório.</p>
            </CustomRequired>
          ) : (
            ""
          )}
        </Stack>
      </Flex>
      <Button
        variant="outline"
        type={requiredCities || requiredCountries ? "button" : "submit"}
        borderColor="yellow700"
        color="white"
        _hover={{ bg: "yellow700" }}
        _active={{ bg: "yellow400", borderColor: "yellow400" }}
      >
        Enviar
      </Button>
    </FormStyled>
  );
};
export default Home;
