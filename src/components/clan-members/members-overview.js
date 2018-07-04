import React from 'react';

import './members-overview.scss';

class MembersOverview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const onlineMembersCount = this.props.members.filter((member) => {
            return member.status !== 'Offline'
        }).length;

        return (
            <div className="membersOverview">
                <div className="memberCounter">
                    <span>{onlineMembersCount} / {this.props.members.length} Ingame</span>
                </div>
                <div className="memberMeter">
                    <div className="memberMeterBar" style={{width: ((onlineMembersCount / this.props.members.length) * 100) + '%'}}></div>
                </div>
            </div>
        );
    }
}

export default MembersOverview;