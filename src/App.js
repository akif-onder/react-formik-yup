import { deepPurple, indigo, green, grey, red, yellow } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import LoginPage from './pages/LoginPage';

const theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <LoginPage />
      </ThemeProvider>
    </div>
  );
}
export default App;