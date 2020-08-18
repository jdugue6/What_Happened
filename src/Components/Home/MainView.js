import JoeyDugue from '../Section/JoeyDugue';
import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  articles: state.articles
});

const MainView = props => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">


        <li className="nav-item">
          <a
            href=""
            className="nav-link active">
            About Me
          </a>
        </li>
      
        <li className="nav-item">
          <a
            href=""
            className="nav-link ">
            Classroom Projects
          </a>
        </li>
       
        <li className="nav-item">
          <a
            href=""
            className="nav-link ">
            Personal Projects
          </a>
        </li>
      

       </ul>
      </div>

      <JoeyDugue
        articles={props.articles} 
      />
    </div>
  );
};

export default connect(mapStateToProps, () => ({}))(MainView);