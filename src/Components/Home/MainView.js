import JoeyDugue from "../Section/JoeyDugue";
import ClassroomProject from "../Section/ClassroomProject";
import PersonalProject from "../Section/PersonalProject";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  articles: state.articles,
});

const MainView = (props) => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <Tabs>
          <TabList>
            <Tab>About Me</Tab>
            <Tab>Classroom Project</Tab>
            <Tab>Personal Project</Tab>
          </TabList>

          <TabPanel>
            <JoeyDugue />
          </TabPanel>
          <TabPanel>
            <ClassroomProject />
          </TabPanel>
          <TabPanel>
            <PersonalProject />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default connect(mapStateToProps, () => ({}))(MainView);
