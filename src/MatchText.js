import React from "react";
import "./MatchText.css";
import './Home.css';
import { withRouter, useHistory } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const MatchText = ({isMatch, handleNewUser}) => {

    let history = useHistory ()

    const handleRedirectToChat = () => {
        history.push("/chat");
        handleNewUser()
    }

    if(isMatch){
        return (
            <Container>
                <Row>
                    <Col xs={12} md={12}>
                        <div className="noMatch">
                            <p className="text-center name"> Sorry, they don't like you back. Better luck next time. </p>                   
                        </div>
                        <p className="left searching" onClick={handleNewUser}> Keep searching</p>
                    </Col>
                </Row>
            </Container>
        )
    } else{
        return (
            <Container>
            <Row>
                <Col xs={12} md={12}>
                    <div className="noMatch">
                        <p className="text-center name"> They like you back  <img
                        className="matchText-tenderLogo" 
                         src="https://res.cloudinary.com/ddoc8nfxb/image/upload/v1573925533/ff7854heart_mhabmy.png" alt="Tender Logo">
                    </img> </p>                   
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 12}} md={{ span: 6, offset: 3 }}>
                    <div className="d-flex justify-content-center align-items-center married">
                        <p className="left searching" onClick={handleRedirectToChat}> Send them a message </p> 
                        <p className="left searching" onClick={handleNewUser}> Keep searching</p>
                    </div>
                </Col>
            </Row>
        </Container>
        )
    }  

}

export default withRouter (MatchText); 