import { Link } from "react-router-dom";
import UserConfirm from "./UserConfirm";
import UserLogin from "./UserLogin";


export default function UserLoginPage() {
    return (
        <>
            <div>
                <nav className='navbar navbar-light' style={{ backgroundColor: "#e3f2fd" }}>
                    <ul>
                        <li>
                            <Link className='navbar-brand' to='/register'>Register</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <UserConfirm />
            <UserLogin />
        </>
    )
}