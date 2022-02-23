import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.scss"


const Header = () => {
  return (
    <header>
        <Link to="/"><img src="./img/logo-clean3000-transparent.png" alt="" /></Link>
        
    </header>
  )
}

export default Header