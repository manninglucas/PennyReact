//==============================================================================
// PennyHeader.jsx
// Author: Lucas Manning
//==============================================================================
import React from 'react';

export default class PennyHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {datetime: new Date()};
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            500
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({datetime: new Date()})
    }

    greeting() {
        let hours = this.state.datetime.getHours();
        let ampm = 'morning';
        if (hours >= 12)
            ampm = 'afternoon';   
        
        return `Good ${ampm} and welcome to `;
    }

    render() {
        return (
            <div>
                <hr></hr>
                    {this.greeting()}<strong>Penny.com</strong>
                <hr></hr>
            </div>
        );
    }
}