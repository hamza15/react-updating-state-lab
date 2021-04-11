// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        };
    }

    handleState = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        });
    }

    handleStateTwo = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.handleState} className="bitrate">Click me!</button>
                <button onClick={this.handleStateTwo} className="resolution">Click me!</button>
            </div>
        )
    }
}