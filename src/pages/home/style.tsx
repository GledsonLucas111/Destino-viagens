import styled from "styled-components";
import Select from "react-select";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 2rem;
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
strong{
  background-color: #FFA300;
  color: #fff;
  padding: 0.1rem 0.5rem;
  border-radius: 2px;
}
p{
  display: inline;
  font-size: 0.9rem;
}
`


