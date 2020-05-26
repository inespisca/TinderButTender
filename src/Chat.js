import React, { Component } from 'react';
import './Chat.css';
import Messages from "./Messages";
import ChatMessagesDisplay from "./ChatMessagesDisplay"

class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userMessage: "",
      sentMessages: [],
    };
  }

  showCurrentlyTyping = e => {
    this.setState({ userMessage: e.target.value });
  }

  sendMessageNow = e => {
    e.preventDefault();
    if (this.state.userMessage) {
      this.setState((state) => {
        return {
          ...state,
          sentMessages: [...state.sentMessages, [state.userMessage,  ]],
          userMessage: "",
        }
      })
    }
  }

  componentDidUpdate(prevProps) {
      if(this.props.user !== prevProps.user){
        this.setState({ sentMessages: [] })
      }
  }

  render() {
    return (
      <div className="chat">
      
        <div className="chat-contacts">
          <Messages 
            randomUsers={this.props.randomUsers} 
            onSelectUser={this.props.onSelectUser} 
          />
        </div>
          <div className="chat-spaceForMessages">
          <div className="chat-spaceForMessagesScroll" id="chat-spaceForMessagesScroll-scrollable">
            <ChatMessagesDisplay 
              sentMessages={this.state.sentMessages} 
              user={this.props.user}
            />
          </div>

          <form className="chat-chatForm">
            <input
              type="text"
              className="chat-textArea"
              rows="2"
              value={this.state.userMessage}
              onChange={this.showCurrentlyTyping} />
            <input
              type="submit"
              className="chat-sendButton"
              value="Send"
              onClick={this.sendMessageNow} />
          </form>
        </div>
       </div>

    );
  }
}

export default Chat;