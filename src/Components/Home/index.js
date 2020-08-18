import Banner from './Banner';
import MainView from './MainView';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  appName: state.appName
});

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <Banner appName={this.props.appName} />

        <div className="container page">
          <div className="row">

            <MainView />

            
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(Home);