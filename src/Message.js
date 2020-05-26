import React from 'react';
import { withRouter } from 'react-router-dom';
import './Message.css';

const Message = ({ user, location, onSelectUser }) => {
    const formatMessage = () => {

        if (location.pathname === '/messages') {
            return `${user.message.substring(0, 130)}...`
        }
        else {
            return `${user.message.substring(0, 15)}...`
        }
    }

    return (

        <div className="message">
            <div className="message-pict" onClick={() => onSelectUser(user, 'profile')}>
                <img src={user.picture.thumbnail} alt="Tender user" className="avatar" />
            </div>
            <div className='message-name' onClick={() => onSelectUser(user, 'profile')}>
                {user.name.first} {user.name.last}
            </div>
            <div className="message-content" onClick={() => onSelectUser(user, 'chat')}>
                {formatMessage()}
            </div>
            <div className="message-date">
                {user.date ? user.date : "29 oct."}
            </div>
        </div>
    )
}

export default withRouter(Message);