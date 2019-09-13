import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class PrivateRoute extends Component {
    render() {
        const { component: Component, auth, ...rest } = this.props
        return (
            <Route {...rest}
                render={props => {
                    return auth ? (<Component {...props} />) : (props.history.push('/'))
                }}
            />
        );
    }
}
const mapStateToProps = state => {
    return {
        auth: state.token
    }
}
export default connect(mapStateToProps)(PrivateRoute)