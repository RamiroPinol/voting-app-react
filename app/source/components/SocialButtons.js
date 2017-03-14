const React = require('react');

function SocialButtons(props) {
  return (
    <div className="social-buttons">
      <a href="/auth/facebook" className="btn btn-fb"><i className="fa fa-facebook"></i> Facebook</a>
      <a href="/auth/twitter" className="btn btn-tw"><i className="fa fa-twitter"></i> Twitter</a>
      <a href="/auth/google" className="btn btn-google"><i className="fa fa-google-plus"></i> Google</a>
    </div>
  )
}

module.exports = SocialButtons;
