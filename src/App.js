import Routing from './Routing/Routing';
import { createTheme, colors, ThemeProvider } from '@mui/material';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    secondary: {
      main: colors.teal[500], //secondary.dark and secondary.light are also created according to main
    },
    neutral:{
      // main, light, dark, contrastText
      main: colors.grey[500],
      darker: colors.grey[700]
    },
  },
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routing />
    </ThemeProvider>
  );
}

export default App;
