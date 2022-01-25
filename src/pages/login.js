import React from 'react';
import ReactDOM from 'react';
import Navbar from '../navbar';
import Header from '../Header';
import Footer from '../Footer';
import '../style/style.css';

export default class Login extends React.Component{

    render() {
        return( 
        <React.StrictMode>
            <Header />
            <Navbar />
            <br/>
            <div class="card">
                <h1> Login Utilisateur </h1>
                <div class="container">
                    <form>
                        <label>Nom :</label><br/>
                        <input type="text" name="user" id="user" placeholder="Username" required></input>
                        <br/>
                        <label>Prenom:</label><br/>
                        <input type="password" name="password" id="password" placeholder="Password" required></input>
                        <br/>
                        <button> Connection </button>
                    </form>
                </div>
            </div>
            <br />
            <Footer /> 
        </React.StrictMode>
        );
    };

}

