import { Link } from 'react-router-dom';
import UserConfirm from './UserConfirm';
import UserLogin from './UserLogin';


export default function UserLoginPage() {
    return (
        <>
            <nav className='navbar navbar-light' style={{ backgroundColor: "#c1d5f5" }}>
                <div className='container-fluid d-flex align-items-center'>
                    <span className='fw-bold fs-4'>Housing</span>

                    {/* Right-aligned navigation */}
                    <ul className='navbar-nav ms-auto d-flex align-items-center'>
                        <li className='nav-item'>
                            <Link className='btn btn-outline-primary fw-bold px-4 py-2' to='/register'>Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <UserLogin />
            <UserConfirm />
        </>
    )
}