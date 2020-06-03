import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  appName: state.appName
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  router: PropTypes.object.isRequired
};

export default connect(mapStateToProps, () => ({}))(App);