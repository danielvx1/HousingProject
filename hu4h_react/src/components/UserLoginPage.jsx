import UserConfirm from "./UserConfirm";
import UserLogin from "./UserLogin";
import UserRegister from "./UserRegister";


export default function UserLoginPage() {
    return (
        <>
            <UserRegister />
            <UserConfirm />
            <UserLogin />
        </>
    )
}