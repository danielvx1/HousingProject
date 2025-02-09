import React, { useState } from 'react'
import { validateLoginUser } from '../services/UserService'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault();

        const user = { username, password }
        console.log(user)

        try {
            const response = await validateLoginUser(user); // Call service
            console.log(response.data); // Debugging response

            // Navigate based on user role
            const { role } = response.data;

            localStorage.setItem("userRole", role);

            if (role === "ADMIN") navigate("/admin");
            else if (role === "SOCIAL") navigate("/social");
            else if (role === "VOLUNTEER") navigate("/volunteer");
        } catch (error) {
            const errorData = error.response && error.response.data
                ? error.response.data
                : { message: error.message || "An unknown error has occurred." }
            // Handle errors
            setErrorMessage(errorData);
            console.log(errorData);
        }
    }

    return (
        <>
            <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
                <div className='card p-4 shadow-lg' style={{ width: "350px" }}>
                    <h2 className='text-center mb-3'>Login</h2>
                    <form>
                        <div className='mb-3'>
                            <label className='form-label'>Username: </label>
                            <input
                                type='text'
                                placeholder='Enter username'
                                name='username'
                                value={username}
                                className='form-control'
                                onChange={(e) => setUsername(e.target.value)}
                            >
                            </input>
                        </div>

                        <div className='mb-3'>
                            <label className='form-label'>Password: </label>
                            <input
                                type='password'
                                placeholder='Enter password'
                                name='password'
                                value={password}
                                className='form-control'
                                onChange={(e) => setPassword(e.target.value)}
                            >
                            </input>
                        </div>

                        {/* Display the global error message above the submit button */}
                        {errorMessage && (
                            <div className="invalid-feedback d-block" style={{ marginBottom: "1rem" }}>
                                {errorMessage}
                            </div>
                        )}

                        <button className='btn btn-primary w-100' onClick={loginUser}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )

}

export default UserLogin