//==============================================================================
// PennyFooter.jsx
// Author: Lucas Manning 
//==============================================================================
import React from 'react';

export default class PennyFooter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            datetime: new Date()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({datetime: new Date()});
    }

    render() {
        return (
            <div>
                <hr></hr>
                {'Date and time: '+this.state.datetime.toLocaleString()}
                <br></br>
                {'Created by '}<a href="http://www.cs.princeton.edu/~rdondero">
                Bob Dondero</a>{' and '} 
                <a href="http://www.github.com/manninglucas">
                 Lucas Manning</a>
            </div>
        );
    }
}