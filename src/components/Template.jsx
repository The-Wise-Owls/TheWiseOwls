import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Template extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return (
      <div>Should Route to this page</div>
    )
  }
}

export default withRouter(Template);