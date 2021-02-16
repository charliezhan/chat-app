import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import ChatFeed from './components/ChatFeed'
import Login from './components/Login'

const App = () => {
    return (
        !localStorage.getItem('username')
        ? <Login /> 
        : <ChatEngine 
            height="100vh"
            projectID="80240be3-5a0c-4c06-a83c-a7804de7360e"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState}/>}
        />
    )
}

export default App