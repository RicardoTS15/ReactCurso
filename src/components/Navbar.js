import React from 'react';
import './css/theme.css'
class Navbar extends React.Component{
    render(){
        return <nav className="navbar navbar-expand-lg navbar-dark main-light-2 fixed-top">
        <a className="navbar-brand" href="/">
        <span className="font-weight-bold text-white">Sin</span>
        <span className="font-weight-light">Azúcar</span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Recetas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Registro de Glucosa</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Consejos</a>
            </li>
            
          </ul>
        </div>
      </nav>
    }
}

export default Navbar;