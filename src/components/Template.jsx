import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Template = () => {

  return (
    <div id="templateTest">Should Route to this page</div>
  );

}

export default withRouter(Template);