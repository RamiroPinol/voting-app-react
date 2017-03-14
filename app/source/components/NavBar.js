const React = require('react');
const NavBarOpts = require('./NavBarOpts');

const NavBar = React.createClass({
  render: function() {
    return (
      <div className="navbar navbar-inverse">
        <div className="container">
          <div className="container-fluid">

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <p className="navbar-text"><a href="/">RP Voting App</a></p>
              <NavBarOpts loggedIn={false}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = NavBar;
