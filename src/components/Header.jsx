import React from 'react';
import { Link } from 'react-router-dom';
import history from '../services/history';

class Header extends React.Component {
  redirectToFavorites() {
    history.push('/favorites')
  }
  render() {
    return (
      <div>
        <Link to='/'>
          <button>Lista dos assets</button>
        </Link>
        <Link to='/favorites'>
          <button>Favoritos</button>
        </Link>
      </div>
    );
  }
}

export default Header;