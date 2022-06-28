import React from 'react';
import logo from '../src/assets/react.svg';
import './App.css';
import Card from './components/card/Card';
import {languages} from "./helper/data";



function App() {
  return (
    <div className='container'>
      <header className='header-img'>
        <img src={logo} alt="header-logo" />
      </header>
      <main>
        <h1>Languages</h1>
        <div>
          <Card languages = {languages}/>
        </div>
      </main>
    </div>
  );
}

export default App;
