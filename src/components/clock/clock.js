import React from 'react'
import ReactDOM from 'react-dom'

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date(Date.now())
        }

        this.tick = setInterval(() => {
            this.setState({
                time: new Date(Date.now())
            })
        }, 1000);
    }

    componentWillUnmount() {
        this.tick.clearInterval();
    }

    render() {
        return (
            <div className="text">
                <div>{this.state.time.toLocaleDateString()}</div>
                <div>{this.state.time.toLocaleTimeString()}</div>
            </div>
        );
    }
}


export default Clock;