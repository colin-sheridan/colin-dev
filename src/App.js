import React from 'react';
import './App.css';
import Header from './components/header.js';
import Link from './components/link.js';



function App() {
  return (
    <div className="container">
      <div className="App">
        <Header />
        <div className="App-links">
          <Link linkText = {'github'} linkURL = {'https://github.com/colin-sheridan'}/>
          <Link linkText = {'insta'} linkURL = {'https://www.instagram.com/idiot_radar/?hl=en'}/>
          <Link linkText = {'email'} linkURL = {'mailto:colin@colinsheridan.dev'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
