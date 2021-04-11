// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        };
    }

    handleState = () => {
        let newVal = this.state.timesClicked + 1
        this.setState({
            timesClicked: newVal
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.handleState}>{this.state.timesClicked}</button>
            </div>
        )
    }
}