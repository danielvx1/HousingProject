import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HeaderVolunteer = () => {

  const navigate = useNavigate()

  const logoutUser = () => {
    localStorage.removeItem("userRole"); // Clear stored role
    navigate("/"); // Redirect to login page
  };

  return (
    <div>
        <header>
            <nav className='navbar navbar-light' style={{ backgroundColor: "#e3f2fd" }}>
              <ul>
                <li>
                  <Link className='navbar-brand' to='/volunteer'>Hands Up Housing</Link>
                </li>
                <li>
                  <button onClick={logoutUser}>Logout</button>
                </li>
              </ul>
            </nav>
        </header>
    </div>
  )
}

export default HeaderVolunteer