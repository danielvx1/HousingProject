import UserRegister from "../components/UserRegister";
import { Link } from "react-router-dom";

export default function UserRegisterPage() {
    return (
        <>
            <nav className='navbar navbar-light' style={{ backgroundColor: "#c1d5f5" }}>
                <div className='container-fluid d-flex align-items-center'>
                    <span className='fw-bold fs-4'>Hand Up Housing</span>

                    {/* Right-aligned navigation */}
                    <ul className='navbar-nav ms-auto d-flex align-items-center'>
                        <li className='nav-item'>
                            <Link className='btn btn-outline-primary fw-bold px-4 py-2' to='/'>Login</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <UserRegister />
        </>
    )
}