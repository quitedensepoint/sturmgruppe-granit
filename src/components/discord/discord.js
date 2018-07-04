import React from 'react';
import DiscordFeed from './discord-feed.js';
import request from 'request';

import './discord.scss';

function getPosts() {
    const messagesAPIEndpoint = 'https://discordapp.com/api/channels/391318744787451927/messages';
    const next = (err, res, body) => {
        this.setState({
            posts: body
        });
    }

    next.bind(this);

    request.get(messagesAPIEndpoint, { headers: {
        Authorization: 'Bot NDU1MTQwNzMzMjAxMTU0MDQ4.Df36_Q.vqy6ZaPuZ2EKe5XSSS8tkEeQz-Y'
    }}, next);
};

class Discord extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [
            {
                id: 123,
                user: {
                    name: 'nickelsdimesquarters',
                    avatarLink: 'http://placehold.it/60x60'
                },
                time: new Date(Date.now()).toLocaleString(),
                content: 'Hello'
            }
        ]};
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          10000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        const messagesAPIEndpoint = 'https://discordapp.com/api/channels/391318744787451927/messages';

        request.get(messagesAPIEndpoint, { headers: {
            Authorization: 'Bot NDU1MTQwNzMzMjAxMTU0MDQ4.Df36_Q.vqy6ZaPuZ2EKe5XSSS8tkEeQz-Y'
        }}, ((err, res, body) => {
            const posts = JSON.parse(body).map((post) => {
                return {
                    id: post.id,
                    user: {
                        name: post.author.username,
                        avatarLink: post.author.avatar
                    },
                    content: post.content,
                    time: post.timestamp
                }
            });
            this.setState({
                posts: posts
            });
        }).bind(this));
    }

    render() {
        return (
            <div className="discord">
                <div className="title">
                    <h2><a href=''>Join Our Discord</a></h2>
                </div>
                <div className="feed">
                    <DiscordFeed posts={this.state.posts} />
                </div>
            </div>
        );
    }
}

export default Discord;