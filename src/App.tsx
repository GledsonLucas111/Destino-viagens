import { ThemeProvider } from '@mui/material/styles';
import Router from 'routes/Router';
import { theme } from 'themes';
import Global from 'themes/global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      <Global />
    </ThemeProvider>
  );
}

export default App;
