import React from 'react';

import './post.scss';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="post">
                <img className="avatar" src={this.props.data.user.avatarLink} />
                <div className="text">
                    <span className="meta">{this.props.data.user.name} • {this.props.data.time}</span>
                    <div className="content">{this.props.data.content}</div>
                </div>
            </div>
        );
    }
}

export default Post;