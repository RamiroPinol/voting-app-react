const React = require('react');

const POLL_DATA = {
  _id: "hnda9c83y59bxyorJQXRU",
  pollName: "Mejor equipo de NBA",
  userId: "oimcrunr9a8trvuaw89pcrm",
  options: { "LA Lakers": 0, "Cavalliers": 0, "GS Warriors": 0, "SA Spurs": 0 }
}

function pollOptions(props) {
  //const options = Object.keys(POLL_DATA.options)
  const options = Object.keys(this.props.options)
  return (
    options.map( function(option, index) {
      return (
        <li className="list-group-item">
          <div className="radio">
            <input type="radio" className="poll-input" name="pollOption" value={option} id={`${this.props._id}${index}`}></input>
            <label for={`${this.props._id}${index}`} className="poll-label"> {option} </label>
          </div>
        </li>
      )
    })
  )
}

module.exports = pollOptions;
