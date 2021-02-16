import { useState } from 'react'
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const authObject = {
            'Project-ID': '80240be3-5a0c-4c06-a83c-a7804de7360e',
            'User-Name': username,
            'User-Secret': password
        }

        try {
            await axios.get('https://api.chatengine.io/chats', { headers: authObject })
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload()
        } catch(error) {
            setError(error)
        }

    }
    return (
        <div className='wrapper'>
            <div className='form'>
                <h1 className='title'>Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} className='input' placeholder='Username' required/>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='input' placeholder='Password' required/>
                    <div align='center'>
                        <button onSubmit={handleSubmit} className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                {error ? <h1>error</h1> : ''}
            </div>
        </div>
    )
}

export default Login