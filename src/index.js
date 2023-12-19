import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider ,extendTheme  } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"

const breakpoints = {
  base: "0px",//mobile
  sm: "381px",//mobile tak                     //yha se start hoga sm
  md: "740px",//tablet se leke or mobile tak
  lg: "1024px",//tablet tak
  xl: "1600px",
  "2xl": "2536px",
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
    
);
