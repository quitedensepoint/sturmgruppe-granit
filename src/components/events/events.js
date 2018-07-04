import React from 'react';
import EventList from './event-list.js';

import './events.scss';

class Events extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const date = new Date(Date.now());

        return (
            <div className="events">
                <div className="eventsHeader">
                    <h2 className="eventMonth">{ date.toLocaleString('en-us', { month: "long" }) }</h2>
                </div>
                <div className='eventsList'>
                    <EventList events={
                        [
                            {
                                date: date,
                                title: 'Placeholder Event'
                            }
                        ]
                    }/>
                </div>
            </div>
        );
    }
}

export default Events;