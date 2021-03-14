import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link to='/'>
          <button>Todos os ativos</button>
        </Link>
        <Link to='/favorites'>
          <button>Ativos favoritos</button>
        </Link>
      </div>
    );
  }
}

export default Header;