/* eslint-disable */
var React = require('react');
var Nav = require( 'react-bootstrap/lib/Nav' );
var NavItem = require( 'react-bootstrap/lib/NavItem' );
var Navbar = require( 'react-bootstrap/lib/Navbar' );
var DropdownButton = require( 'react-bootstrap/lib/DropdownButton' );
var MenuItem = require( 'react-bootstrap/lib/MenuItem' );
var CollapsibleNav = require( 'react-bootstrap/lib/CollapsibleNav' );

var App = React.createClass( {
  render: function() {
    return (
      <Navbar brand={<a href="/">Jiggle.io</a>} inverse staticTop toggleNavKey={0}>
        <CollapsibleNav eventKey={0}>
           <Nav navbar>
              <NavItem eventKey={1} href='#'>Link</NavItem>
              <NavItem eventKey={2} href='#'>Link <span className="navbar-new">2</span></NavItem>
           </Nav>
           <Nav navbar right>
              <NavItem eventKey={1} href='#'>Link Right</NavItem>
              <NavItem eventKey={2} href='#'>Link Right</NavItem>
              <DropdownButton eventKey={3} title='Dropdown'>
                <MenuItem eventKey='1'>Action</MenuItem>
                <MenuItem eventKey='2'>Another action</MenuItem>
                <MenuItem eventKey='3'>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey='4'>Separated link</MenuItem>
              </DropdownButton>
           </Nav>
        </CollapsibleNav>
      </Navbar>
    );
  }
} );

React.render(<App />, document.getElementById('app'));
