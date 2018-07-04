import React from 'react';
import MembersOverview from './members-overview.js';
import MembersList from './members-list.js';

class ClanMembers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            members: [
                {
                    'avatarLink': 'http://via.placeholder.com/60x60',
                    'nickname': 'nickelsdimesquarters',
                    'status': 'Online'
                }
            ]
        };
    }

    render() {
        return (
            <div className="clanMembers">
                <MembersOverview members={this.state.members}/>
                <MembersList members={this.state.members}/>
            </div>
        );
    }
}

export default ClanMembers;