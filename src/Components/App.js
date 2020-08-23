import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header/Header';
import Banner from './Home/Banner';
import { connect } from 'react-redux';

import './App.css'

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <Banner appName={"Hello World!"} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, () => ({}))(App);