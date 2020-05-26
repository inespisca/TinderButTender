import React from 'react';
import './Settings.css';
import Preferences from './Preferences';
import { Radio } from 'semantic-ui-react';

const Settings = ({ settings, onChange }) => {
    return (
        <div className="settings-container">
            <div className="looking-for">
                <p classname="settingsTitle">
                    I'm looking for...
                </p>
            </div>
            <Preferences settings={settings} onChange={onChange}/>
            <div className="setting">
                <p className="settingsItem">
                    Smoker:
                </p>
                <span>
                    <Radio toggle checked={settings.smoker} onChange={() => onChange('smoker')}/>
                </span>
            </div>
            <div className="setting">
                <p className="settingsItem">
                    Vegetarian:
                </p>
                <span>
                    <Radio toggle checked={settings.vegetarian} onChange={() => onChange('vegetarian')}/>
                </span>
            </div>
            <div className="last-setting">
                <p className="settingsItem">
                    Single:
                </p>
                <span>
                    <Radio toggle checked={settings.single} onChange={() => onChange('single')}/>
                </span>
            </div>
        </div>
    )
}

export default Settings; 