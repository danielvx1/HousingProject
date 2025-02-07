import UserRegister from "../components/UserRegister";
import { Link } from "react-router-dom";

export default function UserRegisterPage() {
    return (
        <>
            <div>
                <nav className='navbar navbar-light' style={{ backgroundColor: "#e3f2fd" }}>
                    <ul>
                        <li>
                            <Link className='navbar-brand' to='/'>Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <UserRegister />
        </>
    )
}