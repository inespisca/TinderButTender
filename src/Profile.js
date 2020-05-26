import React from 'react';
import './Profile.css';
import Description from './Description';
import { withRouter, useHistory } from "react-router-dom";



const Profile = ({ user, settings }) => {
    let history = useHistory()

    const handleRedirectToChat = () => {
        history.push("/chat");
    }

    return (
        <div className="profile-container">
            <div className="profile-pict">
                <img src={user.picture.large} alt="Tender user" className="pict" />
            </div>
            <div className="description-container">
                <div className="profile-description-size">
                    <Description user={user} settings={settings} />
                </div>
                <div className="profile-social-links">
                    {(user.name.first === "Angélina" || user.name.first === "Alexandra" || user.name.first === "Inês" || user.name.first === "Elena") &&

                        <div className="social-links">
                            <div>
                                <a href={user.contact.LinkedIn} className="social-link">
                                    <i className="fab fa-linkedin-in "></i>
                                </a>
                            </div>
                            <div>
                                <a href={user.contact.GitHub} className="social-link">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    }
                </div>
                <div className="chat-btn profile-container">
                    <button className="chatBtn-style" onClick={handleRedirectToChat}>Chat
                </button>
                </div>
            </div>
        </div>

    )


}


export default withRouter(Profile); 