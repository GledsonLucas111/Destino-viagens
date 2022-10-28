import { ChakraProvider } from '@chakra-ui/react';
import Router from 'routes/Router';
import { theme } from 'themes';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
