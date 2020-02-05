import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SidebarComponent from "./components/sidebarComponent/SidebarComponent";
import MainContainer from "./components/MainContainer/MainContainer";
import { Helmet } from "react-helmet";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faDatabase, faCheck } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faDatabase, fas, faCheck);
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { active: "about" };
  }

  handleChange = newActive => {
    this.setState({ active: newActive });
  };

  render() {
    return (
      <div className="App ui padded grid">
        <Helmet>
          <meta charSet="utf-8" />
          <title> LehmannDev</title>
        </Helmet>

        <SidebarComponent
          active={this.state.active}
          onActiveChange={this.handleChange}
        />

        <Route
          render={({ location }) => (
            <MainContainer location={location} active={this.state.active} />
          )}
        />
      </div>
    );
  }
}

export default App;
