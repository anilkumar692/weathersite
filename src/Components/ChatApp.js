import React, { useState } from 'react'
import './ChatApp.css'




function ChatApp() {
    const [name, setname] = useState('')
    const [chats, setchats] = useState([])
    const [msg, setmsg] = useState("")
    const sendChat = () => {
        // const chatListRef = ref(db, 'chats');
        // const chatRef = push(chatListRef);
        // set(chatRef, {
        //     name, message: msg 
        // });
        const c = [...chats];
        c.push({ name, message: msg })
        setchats(c)
        setmsg(' ')
    }

    return (
        <div className='body'>
            {name ? null :
                <div>
                    <input type="text" placeholder='enter your name'
                        onBlur={(e) => setname(e.target.value)} >
                    </input>
                </div>
            }
            {name ? <div>
                <h3>User:{name}</h3>
                <div className="chat-container">
                    {chats.map((c) => (<div className={`container ${c.name === name ? 'me' : ''}`}>
                        <p className="chatbox">
                            <strong>{c.name}:</strong>
                            <span>{c.message}</span>
                        </p>
                    </div>))}

                </div>
                <div className='btm'>
                    <input type="text" name="" id="" placeholder='enter your chat' onInput={e => setmsg(e.target.value)} value={msg} />
                    <button onClick={e => sendChat()}>send</button>
                </div>

            </div> : null}
        </div>

    )
}

export default ChatApp