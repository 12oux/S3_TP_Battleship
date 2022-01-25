import React from 'react';
import ReactDOM from 'react';
import Navbar from '../navbar';
import Header from '../Header';
import Footer from '../Footer';
import '../index.scss';
import logo from "../logo/Logo.jpg";

export default class Login extends React.Component{

    render() {
        return( 
        <React.StrictMode>
            <Header />
            <Navbar />
            <br/>
            <a href="/">
            <img src={logo} alt="Logo" class="header-logo"/></a>
            <div class="card">
                <h1> Login Utilisateur </h1>
                <div class="container">
                    <form>
                        <label>Username:</label><br/>
                        <input type="text" name="username" id="user" placeholder="Username" required></input>
                        <br/>
                        <label>Password:</label><br/>
                        <input type="password" name="password" id="password" placeholder="Password" required></input>
                        <br/>
                    </form>
                    <a href='/jeu'><button> Connection </button></a>
                </div>
            </div>
            <br />
            <Footer /> 
        </React.StrictMode>
        );
    };

}

