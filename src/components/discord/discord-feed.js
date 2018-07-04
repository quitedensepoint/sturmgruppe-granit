import React from 'react';
import Post from './post.js';

class DiscordFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="feed">
                {this.props.posts.map((post) => {
                        return (
                            <li key={post.id}>
                                <Post data={post} />
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}

export default DiscordFeed;