import React, { Component } from 'react';
import actions from '../../services/index'
import Landingpage from "../Landingpage/Landingpage"


class Home extends Component {
  async componentDidMount() {
    //actions.test()
  }
  render() {
    return (
      <div>
        <Landingpage />
      </div>
    );
  }
}

export default Home;
