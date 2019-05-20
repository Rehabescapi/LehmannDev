import React, { Component } from "react";

import "./App.css";
import SidebarComponent from "./components/sidebarComponent/SidebarComponent";
import MainContainer from "./components/MainContainer/MainContainer";
import { Helmet } from "react-helmet";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faDatabase, faCheck } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faDatabase, fas, faCheck);
class App extends Component {
  render() {
    return (
      <div className="App ui padded grid">
        <Helmet>
          <meta charSet="utf-8" />
          <title> LehmannDev</title>
        </Helmet>
        <SidebarComponent />

        <MainContainer />
      </div>
    );
  }
}

export default App;
