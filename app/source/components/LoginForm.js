const React = require('react');

function LoginForm() {
  return (
    <form className="form" role="form" action="/login" method="post" acceptCharset="UTF-8" id="login-nav">
      <div className="form-group">
        <label className="sr-only" htmlFor="emailInput">Email address</label>
        <input type="email" className="form-control" name="email" id="emailInput" placeholder="Email address" required></input>
      </div>
      <div className="form-group">
        <label className="sr-only" htmlFor="passwordInput">Password</label>
        <input type="password" className="form-control" name="password" id="passwordInput" placeholder="Password" required></input>
        <div className="help-block text-right"><a href="">Forgot the password?</a></div>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
      </div>
      <div className="checkbox">
        <label><input type="checkbox"></input> keep me logged-in</label>
      </div>
    </form>
  )
}

module.exports = LoginForm;
