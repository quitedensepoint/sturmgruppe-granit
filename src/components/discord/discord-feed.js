import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import request from 'request';

import React from 'react';
import Post from './post.js';

class DiscordFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  getPosts() {
    const messagesAPIEndpoint = 'https://discordapp.com/api/channels/391318744787451927/messages';
    const next = (err, res, body) => {
      this.setState({
        posts: body
      });
    }

    next.bind(this);

    request.get(messagesAPIEndpoint, {
      headers: {
        Authorization: 'Bot NDU1MTQwNzMzMjAxMTU0MDQ4.Df36_Q.vqy6ZaPuZ2EKe5XSSS8tkEeQz-Y'
      }
    }, next);
  };

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      10000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  _getAvatarLink(user) {
    if (user.avatar) {
      return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png`;
    }
    return `https://cdn.discordapp.com/embed/avatars/${user.discriminator % 5}.png`;
  }

  tick() {
    const messagesAPIEndpoint = 'https://discordapp.com/api/channels/391318744787451927/messages';

    request.get(messagesAPIEndpoint, {
      headers: {
        Authorization: 'Bot NDU1MTQwNzMzMjAxMTU0MDQ4.Df36_Q.vqy6ZaPuZ2EKe5XSSS8tkEeQz-Y'
      }
    }, ((err, res, body) => {
      const posts = JSON.parse(body).map((post) => {
        return {
          id: post.id,
          user: {
            name: post.author.username,
            id: post.author.id,
            avatarLink: this._getAvatarLink(post.author)
          },
          content: post.content,
          time: post.timestamp
        }
      });
      this.setState({
        loaded: true,
        posts: posts
      });
    }).bind(this));
  }

  render() {
    return (
      <List>
        {this.state ? this.state.posts.map((post) => {
          return (
            <Post data={post}/>
          );
        }) : <CircularProgress/>
        }
      </List>
    );
  }
}

export default DiscordFeed;
