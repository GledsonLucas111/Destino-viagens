import styled from "styled-components";
import { TextField, Select, FormControl, Box, Stack } from "@mui/material";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 5rem;
`;
export const Flex = styled(Box)`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CustomStack = styled(Stack)`
  display: flex;
  align-items: center;
  width: 35%;
  flex-direction: column;
  @media screen and (max-width: 750px) {
    width: 90%;
  }
`;
export const SelectReact = styled(Select)`
  width: 100%;
`;

export const CustomRequired = styled.div`
  background: #fff;
  margin-top: 0.1875rem !important;
  padding: 0.3rem;
  border-radius: 0 2px 2px 2px;
  font-size: 1rem;
  strong {
    background-color: #ffa300;
    color: #fff;
    padding: 0.1rem 0.5rem;
    border-radius: 2px;
  }
  p {
    display: inline;
    font-size: 0.9rem;
  }
`;
export const CustomInput = styled(TextField)`
  background-color: #fff;
  border-radius: 5px 5px 0 0;
`;
export const CustomFormControl = styled(FormControl)`
  background-color: #fff;
  border-radius: 5px 5px 0 0;
`;
export const sendButton = {
  color: "#fff",
  fontweight: "bold",
  border: "1px solid #FFAD10",
  "&:hover": {
    background: "#FFAD10",
  },
};
