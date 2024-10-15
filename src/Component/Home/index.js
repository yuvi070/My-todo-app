import { Component } from "react";
import Header from "../Header";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <div className="home-main">
        <div className="body">
          <Header />
        </div>
      </div>
    );
  }
}

export default Home;
