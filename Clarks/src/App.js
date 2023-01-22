import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import Navbar from "../src/Components/Navbar";
import AllRoutes from "../src/Components/AllRoutes";
import Midpage from "../src/pages/Midpage";  
import Footer from "../src/Components/Footer";



function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Midpage />
      <Footer/>
    </div>
  );
}

export default App;
