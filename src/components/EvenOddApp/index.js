// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onIncrement = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({
      count: prevState.count + randomNum,
    }))
  }

  getText = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      return 'Even'
    }
    return 'Odd'
  }

  render() {
    const {count} = this.state

    const text = this.getText()
    return (
      <div className="bg-container">
        <h1 className="heading">{`Count ${count}`} </h1>
        <p className="desc">{`Count is ${text} `} </p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="footer-desc">
          *Increase By Random Number Between 0 to 100.
        </p>
      </div>
    )
  }
}

export default EvenOddApp
