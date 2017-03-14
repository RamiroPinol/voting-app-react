var Button = require('./Button.react');

const POLL_DATA = {
  _id: "hnda9c83y59bxyorJQXRU",
  pollName: "Mejor equipo de NBA",
  userId: "oimcrunr9a8trvuaw89pcrm",
  options: { "LA Lakers": 0, "Cavalliers": 0, "GS Warriors": 0, "SA Spurs": 0 }
}

function pollHeader(props) {
  return (
    <div className="panel-heading" dataToggle="collapse" dataTarget=".panel-body">
      <p id="userName">{ this.props.userId }</p>
      <h2 id="pollName">{ this.props.pollName }</h2>
    </div>
  )
}

function pollOptions(props) {
  return (
    Object.keys(this.props.options).forEach( (opt, index) => {
      <li className="list-group-item">
        <div className="radio">
          <input type="radio" className="poll-input" name="pollOption" value=opt id={this.props._id}.slice(-6) + index>
          <label for={this.props._id}.slice(-6) + index className="poll-label"> opt </label>
        </div>
      </li>
    })
  )
}

function pollBody(props) {
  return (
    <div className="panel-body">
      <form className="vote-form" action={ `/vote/${this.props._id}` } method="post">
        <ul className="list-group">
          < pollOptions options={this.props.options} _id={this.props._id} />
        </ul>
    </div>
  );
}

function pollFooter(props) {
  return (
    <div class="panel-footer">
      <button type="submit" class="btn btn-primary btn-sm">Vote</button>
      </form>
    </div>
    /*
    <Button
      label="Vote"
      handleClick={!!!} />
      */
  )
}


class Poll extends React.Component {
  render() {
    return (
      <div class="col-xs-6 col-md-3">
        <div class="panel panel-primary">

          <pollHeader userId={this.props.poll.userId} pollName={this.props.poll.pollName} />
          <pollBody _id={this.props.poll._id} options={this.props.poll.options} />
          <pollFooter />

        </div>
      </div>
    )
  }
}

/*
function pollHeader(props) {
  return (
    <div className="panel-heading" dataToggle="collapse" dataTarget=".panel-body">
      <p id="userName">{ this.props.userId }</p>
      <h2 id="pollName">{ this.props.pollName }</h2>
    </div>
  )
}

function pollOptions(props) {
  return (
    Object.keys(this.props.options).map( (option, index) => {
      return
        <li className="list-group-item">
          <div className="radio">
            <input type="radio" className="poll-input" name="pollOption" value={option} id={`${this.props._id}${index}`}></input>
            <label for={`${this.props._id}${index}`} className="poll-label"> {option} </label>
          </div>
        </li>
    })
  )
}

function pollBody(props) {
  return (
    <div className="panel-body">
      <form className="vote-form" action={ `/vote/${this.props._id}` } method="post">
        <ul className="list-group">
          < pollOptions options={this.props.options} _id={this.props._id} />
        </ul>
      </form>
    </div>
  );
}

function pollFooter(props) {
  return (
    <div className="panel-footer">
      <button type="submit" className="btn btn-primary btn-sm">Vote</button>
    </div>
    /*
    <Button
      label="Vote"
      handleClick={!!!} />
      */
  )
}
/*

const Poll = React.createClass({
  render: function() {
    return (
      <div className="col-xs-6 col-md-3">
        <div className="panel panel-primary">

          <pollHeader userId={this.props.poll.userId} pollName={this.props.poll.pollName} />
          <pollBody _id={this.props.poll._id} options={this.props.poll.options} />

        </div>
      </div>
    )
  }
})
*/
