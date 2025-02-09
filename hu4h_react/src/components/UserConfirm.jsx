import React, { useState } from 'react'
import { adminConfirmUser } from '../services/UserService'

const UserConfirm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmUsername, setConfirmUsername] = useState('')

    function saveConfirmUser(e) {
        e.preventDefault();

        const user = { username, password, confirmUsername }
        console.log(user)

        adminConfirmUser(user).then((response) => {
            console.log(response.data);
        })
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 bg-light'>
            <div className='card p-4 shadow-lg' style={{ width: "350px" }}>
            <h2 className='text-center mb-3'>Confirm</h2>
                <form>
                    <div className='mb-3'>
                        <label className='form-label'>Admin Username: </label>
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

                    <div className='mb-3'>
                        <label className='form-label'>Confirm Username: </label>
                        <input
                            type='text'
                            placeholder='Enter username'
                            name='confirmUsername'
                            value={confirmUsername}
                            className='form-control'
                            onChange={(e) => setConfirmUsername(e.target.value)}
                        >
                        </input>
                    </div>

                    <button className='btn btn-primary w-100' onClick={saveConfirmUser}>Submit</button>
                </form>
            </div>
        </div>
    )

}

export default UserConfirm