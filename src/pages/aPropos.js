import React from 'react';
import ReactDOM from 'react';
import Navbar from '../navbar';
import Header from '../Header';
import Footer from '../Footer';


export default class APropos extends React.Component {
  render() {
  return (
    <React.StrictMode>
      <Header />
      <Navbar />
        <br />
        <div class="card">
          <h2>Benoit Robichaud</h2>
          <p>
            Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla Blablabla 
          </p>
        </div>
        <br />
      <Footer />
    </React.StrictMode>
  );
}};