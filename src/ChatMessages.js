import React, { useRef, useEffect} from "react"
import "./ChatMessages.css"
import { Container, Row, Col } from "react-bootstrap";

const scrollToRef = (ref) =>
    document.getElementById('chat-spaceForMessagesScroll-scrollable').scrollTo(0, ref.current.offsetTop);  

const ChatMessage = ({sentMessages}) => {
    
    const myRef = useRef(null)
    
    useEffect(() => {
        scrollToRef(myRef)
    }, [sentMessages])
        
    return(
        <Container>
            <Row className={"sentMessagesRow"}>
                <Col md={{ span: 4, offset: 8 }} sm={{ span: 5, offset: 7 }} xs={{ span: 8, offset: 4 }} >
                    {
                        sentMessages.map ((message, index) => (
                            <div className="chatMessages-eachMessage" key={index}>
                                <div className="chatMessages-newMessage">
                                    <p> {message} </p>
                                </div>
                                <div className="chatMessages-spaceBetweenMessages"></div>
                            </div>
                        ))
                    }
                    <div ref={myRef}></div>
                </Col>
            </Row>
        </Container>

)
}
export default ChatMessage; 