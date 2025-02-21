import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()

  const logoutUser = () => {
    localStorage.removeItem("userRole"); // Clear stored role
    navigate("/"); // Redirect to login page
  };

  return (
    <header className='m-0 p-0'>
      <nav className='navbar navbar-light' style={{ backgroundColor: "#c1d5f5" }}>
        <div className='container-fluid d-flex align-items-center'>
          <span className='fw-bold fs-4'>Housing</span>

          <ul className='navbar-nav ms-auto d-flex align-items-center'>
            <li className='nav-item'>
              <button className='btn btn-outline-primary fw-bold px-4 py-2' onClick={logoutUser}>Logout</button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header