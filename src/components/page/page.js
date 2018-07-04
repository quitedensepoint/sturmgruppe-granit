import React from 'react';
import Clock from '../clock/clock.js';
import Discord from '../discord/discord.js';
import ClanMembers from '../clan-members/clan-members.js';
import Events from '../events/events.js';
import LatestMedia from '../latest-media/latest-media.js';

import './page.scss';
import logoURL from './logo.gif';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="page">
                <div className="background"></div>
                <div className="header">
                    <div className="logo">
                        <img src={logoURL} />
                    </div>
                    <div className="clock">
                        <Clock />
                    </div>
                    <h1 className="clanTitle">Sturmgruppe Granit</h1>
                </div>
                <div className="panelContainer">
                    <div className="panel">
                        <Events />
                        <LatestMedia />
                    </div>
                    <div className="panel">
                        <Discord />
                    </div>
                    <div className="panel">
                        <ClanMembers />
                    </div>
                </div>
            </div>
        );
    };
}

export default Page;