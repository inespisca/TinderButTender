import React from "react";
import ChatMessages from "./ChatMessages"; 
import ChatShowingNoMessages from "./ChatShowingNoMessages";
import ChatTenderUser from "./ChatTenderUser";

const ChatMessagesDisplay = ({sentMessages, user}) => {
    
    if(user.message){ 
        return (
            <>
                <ChatTenderUser user={user}/>
                <ChatMessages sentMessages={sentMessages}/>
            </>
        )
    }else if
    (sentMessages[0]){
        return <ChatMessages sentMessages={sentMessages}/> 
    }else{
        return <ChatShowingNoMessages/>
    }
}

export default ChatMessagesDisplay; 