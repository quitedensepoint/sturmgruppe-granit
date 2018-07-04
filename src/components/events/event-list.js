import React from 'react';
import Event from './event.js';

class EventList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ol>
            {this.props.events && this.props.events.map((event, index) => {
                return (
                    <Event key={event.date} event={event} />
                );
            })}
            </ol>
        );
    }
}

export default EventList;