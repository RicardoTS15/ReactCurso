import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component {

  render() {
    return (
        <ul className={this.props.className} id={this.props.navId}>
          <li>
            <Link to="/Profile" className="text-decoration-none">Perfil</Link>
          </li>
          <li>
            <Link to="/Receta" className="text-decoration-none">Recetas</Link>
          </li>
          <li>
            <Link to="/" className="text-decoration-none">JavaScript</Link>
          </li>
        </ul>
    );
  }
}

export default Navbar;
