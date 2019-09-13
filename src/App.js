import React, { Component } from 'react';
import Routes from './Routes/routes';
import { checkAuth } from './Store/actions/authAction'
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from './Components/Header/Header';
import "./App.css"
class App extends Component {
  state = {
    isAuthChecked: false
  }
  componentDidMount() {
    this.props.onAuthCheck();
    this.setState({ isAuthChecked: true })
  }
  render() {
    return (
      <React.Fragment>
        <div className="Hero BackgroundSky"></div>
        <div className="AppBody">
          <Header />
          {this.state.isAuthChecked ? <Routes /> : null}
          <div className="ContactUs">
            <span style={{ fontSize: 18 }}>In case of any issues or queries please call : 022-62820570</span>
          </div>
        </div>
      </React.Fragment >
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onAuthCheck: () => dispatch(checkAuth())
  }
}

export default connect(null, mapDispatchToProps)(App);
App.propTypes = {
  optionalFunc: propTypes.func,

}