import React, { Component } from 'react';

class AppState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            error: false
        };
        this.setAppState = this.setAppState.bind(this);
    }

    componentDidCatch(error, info) {
        this.setAppState({ error, info });
      }

    setAppState(newState, callback) {
        this.setState(newState, callback);
    }

    render() {
        return (
            <div className="AppState">
                { React.Children.map(this.props.childern, child => {
                    return React.cloneElement(child, {
                        appState: this.state,
                        setAppState: this.setAppState
                    });
                })}
            </div>
        )
    }
}

export default AppState;