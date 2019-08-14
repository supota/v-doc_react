import React from 'react';
import './App.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  let components = [<Header key='header'/> , <Footer key='footer'/>];
  return (
      <div>{components}</div>
  );
}

export default App;
