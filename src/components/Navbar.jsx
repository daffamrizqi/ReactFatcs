import React from 'react';
import logo from "../logo.svg"
import "./navbar.css"

export default function Navbar() {
    return (
        <nav className='navbar-container' >
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className='title' >ReactFacts</h1>
            <h3 className='sub-title' >React Practice - Static WebPage</h3>
        </nav>
    )
}
