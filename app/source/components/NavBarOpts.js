const React = require('react');
const NavBarDropdown = require('./NavBarDropdown');

function NavBarOpts(props) {
  if (!props.loggedIn) {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><p className="navbar-text">Already have an account?</p></li>
        <NavBarDropdown />
      </ul>
    )
  } else {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li>Logged in as </li>
        <li><a href="/profile">My polls</a></li>
        <li><a href="/newpoll">NEW POLL</a></li>
      </ul>
    )
  }

}

module.exports = NavBarOpts;
