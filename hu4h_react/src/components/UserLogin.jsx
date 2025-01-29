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

        const user = {username, password}
        console.log(user)

        try {
            const response = await validateLoginUser(user); // Call service
            console.log(response.data); // Debugging response
      
            // Navigate based on user role
            const { role } = response.data;
            if (role === "ADMIN") navigate("/admin");
            else if (role === "SOCIAL") navigate("/social");
            else if (role === "VOLUNTEER") navigate("/volunteer");
          } catch (error) {
            // Handle errors
            console.error(error)
          }
    }

    return (
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label>Username: </label>
                    <input
                        type='text'
                        placeholder='Enter username'
                        name='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    >
                    </input>
                </div>

                <div>
                    <label>Password: </label>
                    <input
                        type='password'
                        placeholder='Enter password'
                        name='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </input>
                </div>

                <button onClick={loginUser}>Submit</button>
            </form>
        </div>
    )

 }

 export default UserLogin