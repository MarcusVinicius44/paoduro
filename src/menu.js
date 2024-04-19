import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importe o CSS do Bootstrap
import Logo from './logo.js'; // Importe o componente do logo
import './App.css'; // Importe o arquivo CSS criado

function Menu() {
  return (
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Logo/>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Sobre</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Encomendas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Cardápio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contato</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Delivery</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}


export default Menu;