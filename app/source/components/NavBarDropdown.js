const React = require('react');
const SocialButtons = require('./SocialButtons');
const LoginForm = require('./LoginForm');

const NavBarDropdown = React.createClass({
  render: function() {
    return (
      <li className="dropdown">
        <a href="#" className="dropdown-toggle" data-toggle="dropdown"><b>Login</b> <span className="caret"></span></a>
        <ul id="login-dp" className="dropdown-menu">
        <li>
          <div className="row">
            <div className="col-md-12">
              Login via
              <SocialButtons />
                              or
              <LoginForm />
              <div className="bottom text-center">
                New here? <a href="/signup"><b>Join Us</b></a>
              </div>
            </div>
          </div>
        </li>
        </ul>
      </li>
    )
  }
})

module.exports = NavBarDropdown;
