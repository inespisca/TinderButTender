import React from "react"
import "./ChatTenderUser.css"
import { Container, Row, Col } from "react-bootstrap";


const ChatTenderUser = ({user}) => {

return(
    <Container>
        <Row className={"tenderUserMessage-Row"}>
        <Col  md={4} sm={5} xs={8} >
                    <div>
                        <div className=" tenderUserMessage">
                            <p> {user.message} </p>
                        </div>
                        <div className="tenderUserMessage-spaceBetween"></div>
                    </div>
            </Col>
        </Row>
    </Container>

)
}
export default ChatTenderUser; 