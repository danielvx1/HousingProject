import React, { useState } from 'react'
import { createUser } from '../services/UserService'

const UserRegister = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState(0)

    function saveUser(e) {
        e.preventDefault();

        const user = { username, email, password, role }
        console.log(user)

        createUser(user).then((response) => {
            console.log(response.data);
        })
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
            <div className='card p-4 shadow-lg' style={{ width: "350px" }}>
            <h2 className='text-center mb-3'>Register</h2>
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
                        <label className='form-label'>Email: </label>
                        <input
                            type='text'
                            placeholder='Enter email'
                            name='email'
                            value={email}
                            className='form-control'
                            onChange={(e) => setEmail(e.target.value)}
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

                    <div className='mb-3'>
                        <label className='form-label'>Role: </label>
                        <input
                            type='number'
                            placeholder='Enter role'
                            name='role'
                            value={role}
                            className='form-control'
                            onChange={(e) => setRole(e.target.value)}
                        >
                        </input>
                    </div>

                    <button className='btn btn-primary w-100' onClick={saveUser}>Submit</button>
                </form>
            </div>
        </div>
    )

}

export default UserRegister