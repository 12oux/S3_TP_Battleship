import React from 'react';
import ReactDOM from 'react';
import Navbar from '../navbar';
import Header from '../Header';
import Footer from '../Footer';
import '../index.scss';
import logo from "../logo/Logo.jpg";


export default class Landing extends React.Component {
  // render() {
  //   return (
  //     <div>
  //       <h1>Test </h1>
  //     </div>
  //   )
render() {
  return(
    <React.StrictMode>
      <Header />
      <Navbar />
        <br />
        <a href="/">
          <img src={logo} alt="Logo" class="header-logo"/></a>
        <div class="card">
          <h2>Règles</h2>
          <p> Détruisez les bateaux de votre adversaire pour gagner le match, il est impossible de tirer deux fois sur la même case, les joueurs tirent en alternance jusqu'à ce que tout les bâteaux d'un joueur sont coulés. À l'attaque moussaillons! </p>
            <a href='/login'><button>Se connecter</button></a>
        </div>
        <br />
      <Footer />
    </React.StrictMode>
  )
}};