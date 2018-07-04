import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import './post.scss';

class Post extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <ListItem key={this.props.data.id}>
                <ListItemAvatar children={<Avatar src={this.props.data.user.avatarLink}/>} />
                <ListItemText primary={this.props.data.content} secondary={`${this.props.data.user.name} • ${this.props.data.time}`}/>
            </ListItem>
        );
    }
}

export default Post;
