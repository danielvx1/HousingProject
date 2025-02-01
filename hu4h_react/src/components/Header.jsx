import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-light' style={{ backgroundColor: "#e3f2fd" }}>
                <Link className='navbar-brand' to='/admin'>Hands Up Housing</Link>
            </nav>
        </header>
    </div>
  )
}

export default Header