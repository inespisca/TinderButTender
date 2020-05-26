import Message from './Message';
import React, { Component } from 'react';
import './Message.css';

class Messages extends Component {
    render() {
        const { randomUsers, onSelectUser } = this.props
        return (
            <div className="msg">
                {
                    randomUsers.map(user => {
                        return (
                            <Message
                                user={user}
                                key={user.name.first}
                                onSelectUser={onSelectUser}
                            />
                        )
                    })
                }
            </div>
        )
    }
}








export default Messages; 