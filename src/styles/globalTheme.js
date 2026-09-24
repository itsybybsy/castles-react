import { createTheme,responsiveFontSizes} from "@mui/material/styles";

const subHeaders = {
  fontFamily: "Playfair Display",
  fontWeight: 700,
};

export const globalTheme = responsiveFontSizes(createTheme({ 
  palette: {
    mode: 'light',
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#D5C2B3',
    },
    background: {
      default: "#F7F2ED"   // body background
    },
    text: {
      primary: "#000000", 
      secondary: "#000000", 
    },
  },
  typography: {
    fontFamily: "Poppins",
    fontSize: 12,
    fontWeightLight: 300,
    button: {
      textTransform: 'none',
    },
    h1: {
      fontFamily: "Playfair Display",
      fontSize: 100,
      fontWeight: 700,
    },
    h2: {
      ...subHeaders,
      fontSize: 75,
    },
    h3: {
      ...subHeaders,
      fontSize: 55,
    },
    h4: {
      ...subHeaders,
      fontSize: 35,
      fontWeight: 500,
    },
    h5: {
      ...subHeaders,
      fontSize: 25,
    },
  },

}));