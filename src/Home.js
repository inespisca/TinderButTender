import React, { useState, useEffect } from 'react';
import './Home.css';
import MatchText from './MatchText';
import { Container, Row, Col } from "react-bootstrap";

const Home = ({ randomUser, newUser, onSelectUser }) => {

    const [isMatch, setIsMatch] = useState(false)
    const [isDecided, setIsDecided] = useState(false)

    const handleNewUser = () => {
        newUser();
        setIsDecided(false);
    }

    useEffect (() => {
        setIsDecided(false);
    }, [randomUser])

    const handleMatch = () => {
        const random = Math.round(Math.random());
        setIsMatch(!!random);
        setIsDecided(true);
    }

    const handleClassName = () => {
        if (isDecided) {
            if (isMatch) {
                return "mainImage-transparent"
            } else {
                return "mainImage-bright"
            }
        } else {
            return "mainImage"
        }
    }


    return (
        <>
            <div className="homeCentered">
                <Container>

                    {
                        randomUser.name !== undefined &&
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="arrow left">
                                        <i className={isDecided ? "off-buttons" : "fas fa-chevron-left d-xl-none"} onClick={handleNewUser}></i>
                                        <p className={isDecided ? "off-buttons" : "left d-none d-xl-block"} onClick={handleNewUser}> <sub className="rose"></sub> Next!!! <sub className="rose"></sub></p>
                                    </div>
                                    <img className={handleClassName()} onClick={() => onSelectUser(randomUser, '/profile')} src={randomUser.picture.large} alt="Tender user" />
                                    <div className="arrow">
                                        <i className={isDecided ? "off-buttons" : "fas fa-chevron-right d-xl-none"} onClick={handleMatch}></i>
                                        <p className={isDecided ? "off-buttons" : "right d-none d-xl-block"} onClick={handleMatch}>Marry me!</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    }
                    <Row>
                        <Col xs={12} md={12}>
                            <div className={isDecided ? "off-buttons" : "text-center name"}>
                                <p> {randomUser.name.first}, {randomUser.dob.age} y.o. </p>
                            </div>
                        </Col>
                    </Row>

                    {isDecided &&
                        <MatchText isMatch={isMatch} handleNewUser={handleNewUser} isDecided={isDecided} />
                    }
                </Container>
            </div>
        </>
    )
}

// The settings props are passed from the parent component (App.js) with "const Home = ({ randomUser, newUser, chuckNorrisQuote, settings }) => {" and then they
// are passed to its child component through the part "settings={settings}" in "<Description chuckNorrisQuote={chuckNorrisQuote} settings={settings} />"

export default Home; 