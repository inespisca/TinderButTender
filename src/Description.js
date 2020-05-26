import React, { Component } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import './Profile.css';


const Description = ({ user, settings }) => {

    const changeName = () => {
        const valueChucknorris = user.description;
        let userName = user.name.first;
        if (valueChucknorris.match(/chuck norris/gi)) {
            return valueChucknorris.replace(/chuck norris/gi, userName);
        }
        return user.description
    }

    return (
        <Container>
            <Row>
                <Col md={12} xs={12}>
                    <div className="profile-name profile-container">
                        <div className="description">
                            <span>{user.name.first} {user.name.last}</span><br /><span>{user.dob.age} y.o.</span>
                            <br /><h4 className="profile-quote"> {changeName()}</h4>
                        </div>
                    </div>

                    {
                        (user.name.first !== "Angélina" && user.name.first !== "Inês" && user.name.first !== "Elena" && user.name.first !== "Alexandra") &&
                        <div className="profile-settings">

                            <p>{settings.smoker ? "-Smoker-" : "-Non smoker-"}</p>
                            <p>{settings.vegetarian ? "-Vegetarian-" : "-Carnivorous-"}</p>
                            <p>{settings.single ? "-Single-" : "-Married-"}</p>
                        </div>
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default Description;