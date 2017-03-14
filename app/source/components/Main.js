const React = require('react');
const NavBar = require('./NavBar');

const Main = React.createClass({
  render: function() {
    return (
      <NavBar logged={true} />
    )
  }
})

module.exports = Main;
