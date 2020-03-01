import React from 'react';
import './App.css';
import Carousel from "./MainComponents/Carousel";
import HeaderComponent from "./MainComponents/HeaderComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent />
      </header>
      <body>
      <Carousel />
      </body>
    </div>
  );
}

export default App;
