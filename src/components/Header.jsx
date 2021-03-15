import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div className="header-div">
        <Link to='/'>
          <button className="button-header">Todos os ativos</button>
        </Link>
        <span> | </span>
        <Link to='/favorites'>
          <button className="button-header">Ativos favoritos</button>
        </Link>
      </div>
    );
  }
}

export default Header;