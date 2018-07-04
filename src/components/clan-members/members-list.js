import React from 'react';

import './members-list.scss';

class MembersList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="membersList">
                {this.props.members.map((member, index) => {
                    return (
                        <li key={member.nickname} className="member">
                            <div className="avatar">
                                <img src={member.avatarLink}/>
                            </div>
                            <div className="text">
                                <div className="nickname">{member.nickname}</div>
                                <div className="status">{member.status}</div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default MembersList;