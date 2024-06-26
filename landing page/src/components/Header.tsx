import React from 'react';
import '../styles/header.css';



const Header: React.FC = () => {
    return (
        <header className="header">
            <a className="logo" href="/landing page/">XS</a>
            <nav className="navbar">
                <a href="#">Início</a>
                <a href="#">Sobre</a>
                <a href="#">Planos</a>
                <a href="#">Contato</a>
            </nav>
        </header>
    );
};

export default Header;