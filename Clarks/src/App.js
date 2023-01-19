import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Navbar from "../src/Components/Navbar";
import AllRoutes from "../src/Components/AllRoutes";



function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
