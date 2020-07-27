import React from 'react';
import Logo from '../../assets/img/techflix.png';
import './Menu.css';
//import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img  className="Logo" src={Logo}  alt="Techflix logo" />
            </a>
            <Button as="a" href="/"> 
                TAFO
            </Button>
       </nav> 
    );
}

export default Menu;