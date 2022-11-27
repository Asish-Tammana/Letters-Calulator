import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
  }

  changeCount = event => {
    this.setState({
      count: event.target.value.length,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="content-container">
          <div>
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="phraseInp" className="heading">
              Enter the phrase
            </label>
            <input
              id="phraseInp"
              type="text"
              className="input-box"
              placeholder="Enter the phrase"
              onChange={this.changeCount}
            />
            <p className="no-of-letters">No.of letters: {count}</p>
          </div>
          <img
            className="cal-img"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
