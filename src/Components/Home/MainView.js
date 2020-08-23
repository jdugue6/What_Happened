import JoeyDugue from '../Section/JoeyDugue';
import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  articles: state.articles
});

const MainView = props => {
  let aboutMeActive="nav-link ";
  let personalProjectActive="nav-link";
  let classroomProjectActive="nav-link";
  
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="aboutme" title="About Me">
      <JoeyDugue
                articles={props.articles}/>
        </Tab>

        <Tab eventKey="classroom" title="Classroom Project">
    
        </Tab>
      <Tab eventKey="personal" title="Personal Project">
      </Tab>
      </Tabs>
       
      </div>

      
      
    </div>
  );
};

export default connect(mapStateToProps, () => ({}))(MainView);