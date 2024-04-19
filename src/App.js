// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React from 'react';
import Header from './header.js';
import Menu from './menu.js';
import Imagem from './imagemfundo.js';
import Header1 from './cabecalho1.js';
import Section from './section.js';
import Imagem1 from './produtos.js'
import ImagemC from './carros.js'


const App = () => {
  return (
    <div className="App">
      <Menu />
      <div className="header">
      <Imagem/>
      </div>
      <Header1/>
      <Section/>
      <div className='imagemm'>
        <Imagem1/>
      </div>
      <div className='carro'>
        <ImagemC/>
        </div>
        <div className='carro2'>
        <ImagemC/>
        </div>
        <div className='carro3'>
        <ImagemC/>
        </div>
        <div className='carro4'>
        <ImagemC/>
      </div>
      </div>
  );
};


export default App;