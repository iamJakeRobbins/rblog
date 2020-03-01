import React from 'react';
import './App.css';
import Carousel from "./MainComponents/Carousel";
import HeaderComponent from "./MainComponents/HeaderComponent";
import FooterComponent from "./MainComponents/FooterComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent />
      </header>
      <body>
      <div className="App-body">
        <Carousel />
      </div>
      </body>
      <footer className="App-footer">
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
