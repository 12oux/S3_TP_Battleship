import React from 'react';
import ReactDOM from 'react';
import Navbar from '../navbar';
import Header from '../Header';
import Footer from '../Footer';
import '../index.scss';


export default class APropos extends React.Component {
  render() {
  return (
    <React.StrictMode>
      <Header />
      <Navbar />
        <br />
        <div class="container">
          <h2>Benoit Robichaud</h2>
          <p>
            Je suis un vieux COVIDer qui essai tant bien que mal de faire fonctionner des trucs hyper de base sans trop être capable, notamment je ne suis pas certain comment implémenter passport dans React comme tu as peut-être déjà été capable de remarquer. Autrement, voici un lien vers ma page Github: <a href="https://github.com/12oux"> 12oux </a> et un liens sur ma page Facebook pour me stalker: <a href="https://www.facebook.com/brobichaud12"> Benoit Robichaud </a>. Je stream jamais sur twitch au <a href="https://www.twitch.tv/thegingerizer"> TheGingerizer </a>.
            Merci d'être venu faire un tour sur ma page à propos.
          </p>
        </div>
        <br />
      <Footer />
    </React.StrictMode>
  );
}};