import React from 'react';

import './latest-media.scss';

class LatestMedia extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='latestMedia'>
                <img src='http://placehold.it/400x400' />
            </div>
        );
    }
}

export default LatestMedia;