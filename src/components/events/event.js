import React from 'react';

import './event.scss';

class Event extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <span className='date'>{this.props.event.date.toLocaleDateString('en-us', { hour: '2-digit', minute: '2-digit' })}</span>
                <span className='title'>{this.props.event.title}</span>
                <span className='export'><button className="gcal"></button></span>
            </li>
        );
    }
}

export default Event;