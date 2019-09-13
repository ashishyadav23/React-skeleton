import React, { Component } from 'react';

class Login extends Component {
    render() {
        console.log("login", this.props);
        return (
            <div>
                <h1>Login Page</h1>
            </div>
        );
    }
    componentDidMount() {

    }
    componentWillMount() {

    }
    componentCleanup() {

    }
    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.componentCleanup); // remove the event handler for normal unmounting

    }
}

export default Login;