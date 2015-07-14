/* eslint react/no-multi-comp: 0 */
import React from 'react';

import {
  Button,
  ButtonGroup,
  styleMaps
} from 'react-bootstrap';

styleMaps.addStyle('myCustom');

const App = React.createClass({
  displayName: 'App',

  render() {
    return (
      <ButtonGroup>
        <Button bsStyle='primary'>My button</Button>
        <Button bsStyle='myCustom'>My button</Button>
        <Button bsStyle='facebook'>My button</Button>
      </ButtonGroup>
    );
  }
});

React.render(<App />, document.getElementById('app'));
