import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">

        <Link to="/" className="navbar-brand">
           {this.props.appName.toLowerCase()}
         </Link>
         
          <ul className="nav navbar-nav pull-xs-right">
           <li className="nav-item">
             <Link to="/" className="nav-link"> 
             <FontAwesomeIcon icon={faHome} />
            </Link>
           </li>

           <li className="nav-item">
             <Link to="/login" className="nav-link"> Login</Link>
          </li>

          {/* <li className="nav-item">
             <Link to="/register" className="nav-link"> Register</Link>
          </li> */}
         </ul>
      </nav>
    );
  }
}

export default Header;